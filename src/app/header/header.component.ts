import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent {
    collapsed = true;
    currentComponent = 'recipe';
    @Output()
    componentChosen = new EventEmitter<string>();

    onClick(componentType: string) {
        if (componentType !== this.currentComponent) {
            this.componentChosen.emit(componentType);
            this.currentComponent = componentType;
        }
    }
}
