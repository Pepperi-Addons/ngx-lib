import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class PepQueryBuilderConstantsService {
    private readonly MAX_STRUCTURE_DEPTH: number = 3;

    public get maxDepth(): number {
        return this.MAX_STRUCTURE_DEPTH;
    }
}