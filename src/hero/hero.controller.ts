import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}

  @GrpcMethod('HeroService', 'FindOne') // gRPC 服務的名稱
  findOne(data: HeroById): Hero {
    return this.heroService.findOne(data.id);
  }

  // @GrpcStreamMethod('HeroService')
  // findMany(data$: Observable<HeroById>): Observable<Hero> {
  //   const hero$ = new Subject<Hero>();

  //   const onNext = (heroById: HeroById) => {
  //     const item = this.items.find(({ id }) => id === heroById.id);
  //     hero$.next(item);
  //   };
  //   const onComplete = () => hero$.complete();
  //   data$.subscribe({
  //     next: onNext,
  //     complete: onComplete,
  //   });

  //   return hero$.asObservable();
  // }
}
