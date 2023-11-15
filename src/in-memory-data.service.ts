// in-memory-data.service.ts
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const personnes = [
      { id: 1, firstName: 'islem',lastName:'gharbi',email:'islem.gharbi3000@gmail.com' },
      { id: 2, firstName: 'omar',lastName:'saidi',email:'omar.saidi@gmail.com' },

    ];

    return { personnes };
  }

  
}
