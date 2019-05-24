import { Injectable } from '@angular/core';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class PrevenetUnsavedChanges implements  CanDeactivate<MemberEditComponent> {
    canDeactivate(component: MemberEditComponent) {
        if (component.editForm.dirty) {
            return confirm('are you sure you want to continue? any unsaved changes will be lost');
        }
        return true;
    }
}
