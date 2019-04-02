export interface Category {
    CategoryId: number;
    CategoryName: String;
    Parent: Category;
}
export class Category {
    CategoryId: number;
    CategoryName: String;
    Parent: Category;
    constructor(CategoryId: number, CategoryName: String, Parent: Category){
        this.CategoryId= CategoryId;
        this.CategoryName = CategoryName
        this.Parent = Parent;
    }
}