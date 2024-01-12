import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-comp',
  template: `
    <footer class="container-fluid text-center">
      <a href="#home" title="To Top">
        <i class="bi bi-chevron-up logo-tiny"></i>
      </a>
    </footer>
  `,
})
export class FooterComp implements OnInit {
  name: string = 'User';

  ngOnInit() {
    // Initialization code here
  }
}
