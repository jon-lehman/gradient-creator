import { writable } from 'svelte/store';

export let paletteOptions = writable([
    {   
        'name':'Summer Dew',
        'colors':['#4158D0', '#C850C0', '#C850C0', '#FFCC70' ]
    },
    {   
        'name':"Peach's Beach",
        'colors':['#FA8BFF', '#2BD2FF', '#2BFF88', '#D9FFDE']
    },
    {   
        'name':"Harsh Summer",
        'colors':['#FFFFFF', '#6284FF', '#FF0000', '#BA0008']
    },
    {   
        'name':"Spring Meadow",
        'colors':['#85FFBD', '#FFFB7D', '#FFFB7D', '#85FFBD']
    },
    {   
        'name':"Cotton Candy",
        'colors':['#FFDEE9', '#B5FFFC', '#FFDEE9', '#B5FFFC']
    },
    {   
        'name':"Blend of Beauty",
        'colors':['#FF9A8B', '#FF6A88', '#FF99AC', '#FF99AC']
    },
    {   
        'name':"Mystery",
        'colors':['#DC5894', '#F9F9FB', '#E5EEF5', '#DC5894']
    },
    {   
        'name':"Perfume",
        'colors':['#00E2F9', '#B467E2', '#F366DC', '#00E2F9']
    },
    {   
        'name':"Highs and Lows",
        'colors':['#24CDF8', '#E501D4', '#FFB620', '#6948DD']
    }
]);

// Size
export const width = writable(800);
export const height = writable(600);

// Color
export const paletteName = writable('Summer Dew');
export let palettes = writable(paletteOptions);
export const complexity = writable(80);

// Noise
export const opacity = writable(60);
export const blendMode = writable('Overlay');