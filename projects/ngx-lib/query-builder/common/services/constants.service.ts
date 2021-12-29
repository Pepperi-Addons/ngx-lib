import { Injectable } from '@angular/core';


@Injectable()
export class PepQueryBuilderConstantsService {
    private readonly MAX_STRUCTURE_DEPTH = 3;

    public get maxDepth(): number {
        return this.MAX_STRUCTURE_DEPTH;
    }
}