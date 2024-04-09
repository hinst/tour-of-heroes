import { Hero } from './hero';

export const HEROES: Hero[] = [
    { name: 'Dr. Nice' },
    { name: 'Bombasto' },
    { name: 'Celeritas' },
    { name: 'Magneta' },
    { name: 'RubberMan' },
    { name: 'Dynama' },
    { name: 'Dr. IQ' },
    { name: 'Magma' },
    { name: 'Tornado' },
].map((hero, index) => ({ id: 10 + index, ...hero }));
