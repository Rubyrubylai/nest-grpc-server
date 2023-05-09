import { Injectable } from '@nestjs/common';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';

@Injectable()
export class HeroService {
	private readonly items: Hero[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];

	findOne(targetId: number): Hero {
		return this.items.find(({ id }) => id === targetId);
	}
}
