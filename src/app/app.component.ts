import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarFiltersComponent } from "./products-sidebar/sidebar-filters.component";
import { ProductPostComponent } from "./product-post/product-post.component";
import { ProductTabsComponent } from "./product-tabs/product-tabs.component";
import { ProductFilterComponent } from "./product-filter/product-filter.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { ProductsDetailsModalComponent } from "./products-details-modal/products-details-modal.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarFiltersComponent,
    ProductPostComponent,
    ProductTabsComponent,
    ProductFilterComponent,
    PaginationComponent,
    ProductsDetailsModalComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
