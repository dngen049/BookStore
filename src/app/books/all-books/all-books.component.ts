import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
})
export class AllBooksComponent implements OnInit {
  books: Book[];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
}
