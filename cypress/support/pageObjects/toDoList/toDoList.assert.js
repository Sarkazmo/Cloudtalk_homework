import { ToDoListLocators } from "./toDoList.locators";

class ToDoListAsserts {
   verifyNthElementTextEql(nth, expectedText) {
      cy.get(ToDoListLocators.toDoListElementLabel).eq(nth).should("have.text", expectedText);
   }

   verifyToDoListLengthEql(expectedLength) {
      cy.get(ToDoListLocators.toDoListElementLabel).should("have.length", expectedLength);
   }

   verifyNthElementIsSelected(nth) {
      cy.get(ToDoListLocators.toDoListElementContainer).eq(nth).should("have.class", "completed");
   }
}

export const ToDoListPageAsserts = new ToDoListAsserts();
