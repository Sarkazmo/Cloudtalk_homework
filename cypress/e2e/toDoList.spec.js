import { ToDoListPageAsserts } from "../support/pageObjects/toDoList/toDoList.assert";
import { ToDoPageTestData } from "../support/pageObjects/toDoList/toDoList.const";
import { ToDoListPage } from "../support/pageObjects/toDoList/toDoList.page";

describe("ToDo list test suite", () => {
   beforeEach(() => {
      cy.openToDoListPage();
      ToDoListPage.addToDoListElement(ToDoPageTestData.TODO_ITEM_ONE);
      ToDoListPage.addToDoListElement(ToDoPageTestData.TODO_ITEM_TWO);
   });

   it("adding 2 elements to ToDo list", () => {
      ToDoListPageAsserts.verifyNthElementTextEql(0, ToDoPageTestData.TODO_ITEM_ONE);
      ToDoListPageAsserts.verifyNthElementTextEql(1, ToDoPageTestData.TODO_ITEM_TWO);
      ToDoListPageAsserts.verifyToDoListLengthEql(2);
   });

   it("selecting first element of ToDo list", () => {
      ToDoListPage.selectNthElementOnToDoList(0);

      ToDoListPageAsserts.verifyNthElementIsSelected(0);
   });
});
