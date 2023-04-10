import { ToDoListLocators } from "./toDoList.locators";

class ToDoList{
    addToDoListElement(elementText){
        cy.get(ToDoListLocators.toDoListInput).type(`${elementText}{enter}`);
    }

    selectNthElementOnToDoList(nth){
        cy.get(ToDoListLocators.toDoListElementCheckbox).eq(nth).click();
    }
};

export const ToDoListPage = new ToDoList();