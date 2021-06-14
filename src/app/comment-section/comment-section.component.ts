import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  @Input() recipeKey;
  grade: number = 0;
  public alreadyReviewed: boolean = false;
  public gradeArr: string[] = ["star-outline", "star-outline", "star-outline", "star-outline", "star-outline"];
  public reviews: any[] = [];
  public userId = window.localStorage.getItem("userId");
  public dialogOpen: boolean = false;

  constructor(private _firebaseService: FirebaseService, private formBuilder: FormBuilder, private tosatr: ToastrService) { }

  commentForm = this.formBuilder.group({
    comment: '',
    name: '',
    grade: 0,
    userId: 0
  })

  ngOnInit(): void {
    this._firebaseService.getRecipe(this.recipeKey).valueChanges().subscribe(recipe => {
      this.reviews = [];
      if (recipe.comments && recipe.comments.length > 0) {
        recipe.comments.forEach(el => {
          this.reviews.push(el);
        })
      }
      if (this.reviews && this.reviews.length > 0) {
        const foundComment = this.reviews.find(el => el.userId === this.userId);
        if (foundComment) {
          this.commentForm = this.formBuilder.group({
            comment: foundComment.comment,
            name: foundComment.name,
            grade: foundComment.grade,
            userId: foundComment.userId
          })
          this.handleGrade(foundComment.grade - 1);
          this.alreadyReviewed = true;
        }
      }
    })

  }

  onSubmit(): void {
    if (window.localStorage.getItem("userId")) {
      this.commentForm.value.userId =
        window.localStorage.getItem("userId");
      if (!this.commentForm.value.comment
        || !this.commentForm.value.name) {
        this.tosatr.error("You must complete all the fields marked with *", "Input Error")
      }
      else if (this.grade == 0) {
        this.tosatr.error("You must grade the recipe before submitting", "Input Error")
      }
      else {
        this.commentForm.value.grade = this.grade;
        this._firebaseService.postComment(this.recipeKey, this.commentForm.value).then(() => {
          this.alreadyReviewed = true;
          this.tosatr.success("Comment was posted!", "Success");
        })
          .catch(() => {
            this.tosatr.error("An error has occured...", "Server Error");
          })

        console.log(this.commentForm.value);
      }
    } else {
      this.tosatr.error("You are not logged in", "Not logged in")
    }
  }


  handleGrade(i: number): void {
    this.gradeArr = this.gradeArr.map(el => el = "star-outline");
    for (let index = i; index >= 0; index--) {
      this.gradeArr[index] = "star";
    }
    this.grade = i + 1;
  }

  handleEdit(): void {
    this.alreadyReviewed = false;
    this.tosatr.info("You can now edit your comment", "Editing")
  }

  toggleDialog(): void {
    this.dialogOpen = !this.dialogOpen;
  }

  handleDelete(): void {
    this._firebaseService.deleteComment(this.recipeKey, parseInt(this.userId)).then(() => {
      this.tosatr.info("Your comment was deleted", "Deleted");
      this.alreadyReviewed = false;
      this.dialogOpen = false;
      this.commentForm.reset();
    })
      .catch(() => {
        this.tosatr.error("An error has occured...", "Server Error")
      })
  }

}
