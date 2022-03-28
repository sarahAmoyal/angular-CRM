import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Pipe({
  name: 'filterContact',
})
export class FilterContactPipe implements PipeTransform {
  transform(
    contacts: Contact[] | null,
    propertyName: keyof Contact,
    searchTerm: string 
  ): Contact[] | null {
    if (!contacts) {
      return null;
    }
    return contacts?.filter((contact) => {
      return contact[propertyName]
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
  }
}
