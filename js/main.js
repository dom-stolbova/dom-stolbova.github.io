import * as MOY from '../libs/three.module.js';
import { OrbitControls } from '../libs/OrbitControls.js';

import { PageFlip } from '../libs/page-flip.module.js'; 

const fontStyle = document.createElement('style');
fontStyle.textContent = `
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');
@font-face {
    font-family: 'RetroSoviet';
    src: local('PT Serif'), local('Playfair Display'), local('Times New Roman');
    font-weight: normal;
    font-style: normal;
}
`;
document.head.appendChild(fontStyle);

const scenes = {
    scene1: {
        id: 'scene1',
        name: 'Сцена 1 | Меню',
        type: 'cube',
        cameraSettings: {
            pitch: 2,
            yaw: 180,
            distance: 1
        },
        cubeMap: [
            { type: 'image', path: '../images/right.webp', name: 'right' },
            { type: 'image', path: '../images/left.webp', name: 'left' },
            { type: 'image', path: '../images/up.webp', name: 'up' },
            { type: 'image', path: '../images/down.webp', name: 'down' },
            { type: 'video', path: '../video/front.webm', name: 'front' },
            { type: 'image', path: '../images/back.webp', name: 'back' } 
        ],
        hotspots: [
            {
                id: 'hotspot_to_scene2',
                face: 'front',
                u: 0.495,
                v: 0.505,
                targetType: 'scene',
                targetScene: 'scene2',
                title: '',
                icon: '',
                width: 300,
                height: 100,
                depth: 1,
                color: 0xff3366,
                emissiveColor: 0x441122,
                offset: 5,
                transparent: true,
                opacity: 0
            },
            {
                id: 'hotspot_to_url_max',
                face: 'right',
                u: 0.635,
                v: 0.558,
                targetType: 'url',
                url: 'https://web.max.ru/-69364915576866',
                title: 'Канал библиотеки МАХ',
                icon: '',
                width: 1,
                height: 80,
                depth: 80,
                color: 0x33ff66,
                emissiveColor: 0x114422,
                offset: 5,
                transparent: true,
                opacity: 0
            },
            {
                id: 'hotspot_to_url_grcbs',
                face: 'right', 
                u: 0.505,
                v: 0.558,
                targetType: 'url',
                url: 'https://grcbs18.gosuslugi.ru',
                title: 'Сайт библиотеки',
                icon: '',
                width: 1,
                height: 80,
                depth: 80,
                color: 0x33ff66,
                emissiveColor: 0x114422,
                offset: 5,
                transparent: true,
                opacity: 0
            },
            {
                id: 'hotspot_to_url_vk',
                face: 'right',
                u: 0.375,
                v: 0.558,
                targetType: 'url',
                url: 'https://vk.ru/club111742052',
                title: 'Группа библиотеки ВКонтакте',
                icon: '',
                width: 1,
                height: 80,
                depth: 80,
                color: 0x33ff66,
                emissiveColor: 0x114422,
                offset: 5,
                transparent: true,
                opacity: 0
            }
        ]
    },
    scene2: { 
        id: 'scene2',
        name: 'Сцена 2 | Улица',
        type: 'cube',
        cameraSettings: { pitch: -3, yaw: 164, distance: 1 },
        cubeMap: [
            { type: 'image', path: '../images/right2.webp', name: 'right', maskPath: '../images/right2_mask.webp' },
            { type: 'image', path: '../images/left2.webp', name: 'left' },
            { type: 'image', path: '../images/up2.webp', name: 'up' },
            { type: 'image', path: '../images/down2.webp', name: 'down' },
            { type: 'image', path: '../images/front2.webp', name: 'front' },
            { type: 'image', path: '../images/back2.webp', name: 'back' }
        ],
        hotspots: [
            {
                id: 'hotspot2_to_scene3',
                face: 'front',
                u: 0.387,
                v: 0.52,
                targetType: 'scene',
                targetScene: 'scene3',
                title: 'Входная дверь',
                icon: '',
                width: 160,
                height: 200,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 20,
                transparent: true,
                opacity: 0,
				rotate: { x: 0, y: 347, z: 0 }
            },
            {
                id: 'hotspot2_to_scene21',
                face: 'left',
                u: 0.13,
                v: 0.523,
                targetType: 'scene',
                targetScene: 'scene21',
                title: 'улица Кирова',
                icon: '',
                width: 65,
                height: 35,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 26,
                transparent: true,
                opacity: 0,
				rotate: { x: 0, y: 145, z: 0 }	
			},
            {
                id: 'hotspot2_zags',
                face: 'front',
                u: 0.174,
                v: 0.386,
                targetType: 'imagepopup',     
                imageUrl: '../images/tabl/zags.webp', 
                imageTitle: '',    
                title: 'ЗАГС',
                icon: '',
                width: 37,
                height: 58,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 26,
                transparent: true,
                opacity: 0,
				rotate: { x: 0, y: 0, z: 358 }	
			},
            {
                id: 'hotspot2_zads2',
                face: 'front',
                u: 0.11,
                v: 0.383,
                targetType: 'imagepopup',    
                imageUrl: '../images/tabl/zags.webp', 
                imageTitle: '',    
                title: 'ЗАГС',
                icon: '',
                width: 50,
                height: 60,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 26,
                transparent: true,
                opacity: 0,
				rotate: { x: 0, y: 0, z: 356 }	
			},
            {
                id: 'hotspot2_grcbs',
                face: 'left',
                u: 0.074,
                v: 0.386,
                targetType: 'imagepopup',     
                imageUrl: '../images/tabl/grcbs.webp',  
                imageTitle: '',    
                title: 'Библиотека',
                icon: '',
                width: 105,
                height: 56,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 55,
                transparent: true,
                opacity: 0,
				rotate: { x: 0, y: 0, z: 356 }	
			}	
        ]
    },
    scene21: { 
        id: 'scene21',
        name: 'Сцена 21 | Улица Кирова',
        type: 'cube',
        cameraSettings: { pitch: 12, yaw: 200, distance: 1 },
        cubeMap: [
            { type: 'image', path: '../images/right21.webp', name: 'right'},
            { type: 'image', path: '../images/left21.webp', name: 'left', maskPath: '../images/left21_mask.webp' },
            { type: 'image', path: '../images/up21.webp', name: 'up' },
            { type: 'image', path: '../images/down21.webp', name: 'down' },
            { type: 'image', path: '../images/front21.webp', name: 'front', maskPath: '../images/front21_mask.webp' },
            { type: 'image', path: '../images/back21.webp', name: 'back' }
        ],
        hotspots: [
            {
                id: 'hotspot21_to_scene2',
                face: 'front',
                u: 0.429,
                v: 0.523,
                targetType: 'scene',
                targetScene: 'scene2',
                title: 'Двор',
                icon: '',
                width: 35,
                height: 20,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 20,
                transparent: true,
                opacity: 0,
				rotate: { x: 0, y: 0, z: 0 }
            },
            {
                id: 'hotspot21_to_scene22',
                face: 'right',
                u: 0.684,
                v: 0.494,
                targetType: 'scene',
                targetScene: 'scene22',
                title: 'Фасад здания',
                icon: '',
                width: 74,
                height: 43,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 26,
                transparent: true,
                opacity: 0,
				rotate: { x: 0, y: 70, z: 0 }	
			}	
        ]
    },
    scene22: { 
        id: 'scene22',
        name: 'Сцена 22 | Фасад здания',
        type: 'cube',
        cameraSettings: { pitch: -13, yaw: 177, distance: 1 },
        cubeMap: [
            { type: 'image', path: '../images/right22.webp', name: 'right'},
            { type: 'image', path: '../images/left22.webp', name: 'left'},
            { type: 'image', path: '../images/up22.webp', name: 'up' },
            { type: 'image', path: '../images/down22.webp', name: 'down' },
            { type: 'image', path: '../images/front22.webp', name: 'front', maskPath: '../images/front22_mask.webp' },
            { type: 'image', path: '../images/back22.webp', name: 'back' }
        ],
        hotspots: [
            {
                id: 'hotspot22_to_scene21',
                face: 'front',
                u: 0.715,
                v: 0.491,
                targetType: 'scene',
                targetScene: 'scene21',
                title: 'Угол здания',
                icon: '',
                width: 35,
                height: 20,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 20,
                transparent: true,
                opacity: 0,
				rotate: { x: 0, y: 0, z: 358 }
            },
            {
                id: 'hotspot22_don',
                face: 'front',
                u: 0.891,
                v: 0.439,
                targetType: 'imagepopup',      
                imageUrl: '../images/tabl/don.webp',  
                imageTitle: '',  
                title: 'ДондыДор',
                icon: '',
                width: 42,
                height: 56,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 26,
                transparent: true,
                opacity: 0,
				rotate: { x: 0, y: 0, z: 0 }	
			},
            {
                id: 'hotspot22_pamyat',
                face: 'front',
                u: 0.696,
                v: 0.431,
                targetType: 'imagepopup',      
                imageUrl: '../images/tabl/pamyat.webp',  
                imageTitle: '',    
                title: 'Памятник истории',
                icon: '',
                width: 54,
                height: 45,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 26,
                transparent: true,
                opacity: 0,
				rotate: { x: 0, y: 0, z: 0 }	
			},
            {
                id: 'hotspot22_iosif',
                face: 'front',
                u: 0.192,
                v: 0.42,
                targetType: 'imagepopup',    
                imageUrl: '../images/tabl/iosif.webp',  
                imageTitle: '',   
                title: 'Иосиф Алексеевич Наговицын',
                icon: '',
                width: 42,
                height: 20,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 26,
                transparent: true,
                opacity: 0,
				rotate: { x: 0, y: 0, z: 0 }	
			},
            {
                id: 'hotspot22_shtab',
                face: 'left',
                u: 0.154,
                v: 0.441,
                targetType: 'imagepopup',   
                imageUrl: '../images/tabl/shtab.webp', 
                imageTitle: '',    
                title: 'Штаб 1941 года',
                icon: '',
                width: 32,
                height: 21,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 26,
                transparent: true,
                opacity: 0,
				rotate: { x: 0, y: 0, z: 0 }	
			}	
        ]
    },		
    scene3: {
        id: 'scene3',
        name: 'Сцена 3 | Лестничная площадка',
        type: 'cube',
        cameraSettings: { pitch: 15, yaw: 180, distance: 1 },
        cubeMap: [
            { type: 'image', path: '../images/right3.webp', name: 'right' },
            { type: 'image', path: '../images/left3.webp', name: 'left' },
            { type: 'image', path: '../images/up3.webp', name: 'up' },
            { type: 'image', path: '../images/down3.webp', name: 'down' },
            { type: 'image', path: '../images/front3.webp', name: 'front', maskPath: '../images/front3_mask.webp' },
            { type: 'image', path: '../images/back3.webp', name: 'back' }
        ],
        hotspots: [
            {
                id: 'hotspot3_to_scene2',
                face: 'front',
                u: 0.452,
                v: 0.53,
                targetType: 'scene',
                targetScene: 'scene2',
                title: 'На улицу',
                icon: '',
                width: 80,
                height: 63,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 5,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 0, z: 353 }
            },
            {
                id: 'hotspot_show_book_1',
                face: 'front',
                u: 0.155,
                v: 0.63,
                targetType: 'book',
				bookId: 'book1',
                action: 'showBook',
                title: 'О семье Столбовых',
                icon: '',
                width: 164,
                height: 270,
                depth: 1,
                color: 0xff3368,
                emissiveColor: 0x441122,
                offset: 5,
                transparent: true,
                opacity: 0
            },
            {
                id: 'hotspot3_to_scene4',
                face: 'front',
                u: 0.29,
                v: 0.555,
                targetType: 'scene',
                targetScene: 'scene4',
                title: 'Передняя первого этажа',
                icon: '',
                width: 50,
                height: 42,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 5,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 0, z: 350 }
            },
            {
                id: 'hotspot3_to_scene8',
                face: 'front',
                u: 0.765,
                v: 0.545,
                targetType: 'scene',
                targetScene: 'scene8',
                title: 'На лестницу',
                icon: '',
                width: 80,
                height: 45,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 5,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 0, z: 355 }
            }
        ]
    },
    scene4: {
        id: 'scene4',
        name: 'Сцена 4 | Передняя первого этажа',
        type: 'cube',
        cameraSettings: { pitch: 15, yaw: 180, distance: 1 },
        cubeMap: [
            { type: 'image', path: '../images/right4.webp', name: 'right' },
            { type: 'image', path: '../images/left4.webp', name: 'left' },
            { type: 'image', path: '../images/up4.webp', name: 'up' },
            { type: 'image', path: '../images/down4.webp', name: 'down' },
            { type: 'image', path: '../images/front4.webp', name: 'front', maskPath: '../images/front4_mask.webp' },
            { type: 'image', path: '../images/back4.webp', name: 'back', maskPath: '../images/back4_mask.webp' }
        ],
        hotspots: [
            {
                id: 'hotspot4_to_scene3',
                face: 'back',
                u: 0.437,
                v: 0.556,
                targetType: 'scene',
                targetScene: 'scene3',
                title: 'Лестничная площадка',
                icon: '',
                width: 65,
                height: 50,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 5,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 0, z: 5 }
            },
            {
                id: 'hotspot4_to_scene5',
                face: 'front',
                u: 0.586,
                v: 0.594,
                targetType: 'scene',
                targetScene: 'scene5',
                title: 'К печи',
                icon: '',
                width: 75,
                height: 35,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 5,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 0, z: 90 }
            },
            {
                id: 'hotspot4_to_scene7',
                face: 'front',
                u: 0.4,
                v: 0.56,
                targetType: 'scene',
                targetScene: 'scene7',
                title: 'Зал первого этажа',
                icon: '',
                width: 54,
                height: 45,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 5,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 0, z: 355 }
            }
        ]
    },
    scene5: {
        id: 'scene5',
        name: 'Сцена 5 | У печи',
        type: 'cube',
        cameraSettings: { pitch: 12, yaw: 180, distance: 1 },
        cubeMap: [
            { type: 'image', path: '../images/right5.webp', name: 'right' },
            { type: 'image', path: '../images/left5.webp', name: 'left' },
            { type: 'image', path: '../images/up5.webp', name: 'up' },
            { type: 'image', path: '../images/down5.webp', name: 'down' },
            { type: 'image', path: '../images/front5.webp', name: 'front', maskPath: '../images/front5_mask.webp' },
            { type: 'image', path: '../images/back5.webp', name: 'back', maskPath: '../images/back5_mask.webp' }
        ],
        hotspots: [
            {
                id: 'hotspot5_to_video_5_1',
                face: 'front',
                u: 0.475,
                v: 0.400,
                targetType: 'video',
                targetCubeMap: [
                    { type: 'video', path: '../video/front5_1.webm', name: 'front', maskPath: '../video/front5_1_mask.webm' }
                ],
                title: 'Открыть полу дверцу',
                icon: '',
                width: 70,
                height: 128,
                depth: 1,				
                color: 0x4caf50,
                emissiveColor: 0x2e7d32,
                offset: 5, 
                transparent: true,
                opacity: 0
            },
            {
                id: 'hotspot5_to_video_5_2',
                face: 'front',
                u: 0.548,
                v: 0.4,
                targetType: 'video',
                targetCubeMap: [
                    { type: 'video', path: '../video/front5_2.webm', name: 'front', maskPath: '../video/front5_2_mask.webm' }
                ],
                title: 'Открыть топочную дверцу',
                icon: '',
                width: 70,
                height: 130,
                depth: 1,
                color: 0x4caf50,
                emissiveColor: 0x2e7d32,
                offset: 5,
                transparent: true,
                opacity: 0
            },
            {
                id: 'hotspot5_to_scene5',
                face: 'front',
                u: 0.4,
                v: 0.4,
                targetType: 'image',
                targetCubeMap: [
                    { type: 'image', path: '../images/front5.webp', name: 'front', maskPath: '../images/front5_mask.webp' }
                ],
                title: 'Закрыть полу дверцу',
                icon: '',
                width: 70,
                height: 130,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 5,
                transparent: true,
                opacity: 0
            },
            {
                id: 'hotspot5_to_scene6',
                face: 'front',
                u: 0.47,
                v: 0.807,
                targetType: 'scene',
                targetScene: 'scene6',
                title: 'В печь',
                icon: '',
                width: 40,
                height: 75,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 5,
                transparent: true,
                opacity: 0
            },			
            {
                id: 'hotspot5_to_scene4',
                face: 'back',
                u: 0.140,
                v: 0.364,
                targetType: 'scene',
                targetScene: 'scene4',
                title: 'Передняя первого этажа',
                icon: '',
                width: 80,
                height: 40,
                depth: 1,
                color: 0xff9800,
                emissiveColor: 0xb85c00,
                offset: 5,
                transparent: true,
                opacity: 0
            },
            {
                id: 'hotspot5_to_scene7',
                face: 'back',
                u: 0.660,
                v: 0.290,
                targetType: 'scene',
                targetScene: 'scene7',
                title: 'Зал первого этажа',
                icon: '',
                width: 120,
                height: 65,
                depth: 1,
                color: 0xff9800,
                emissiveColor: 0xb85c00,
                offset: 5,
                transparent: true,
                opacity: 0
            }
        ]
    },
    scene6: {
        id: 'scene6',
        name: 'Сцена 6 | Печь',
        type: 'cube',
        cameraSettings: { pitch: 2, yaw: 180, distance: 1 },
        cubeMap: [
            { type: 'image', path: '../images/right6.webp', name: 'right' },
            { type: 'image', path: '../images/left6.webp', name: 'left' },
            { type: 'image', path: '../images/up6.webp', name: 'up' },
            { type: 'image', path: '../images/down6.webp', name: 'down' },
            { type: 'image', path: '../images/front6.webp', name: 'front' },
            { type: 'image', path: '../images/back6.webp', name: 'back', maskPath: '../images/back6_mask.webp' }
        ],
        hotspots: [
            {
                id: 'hotspot6_to_scene5',
                face: 'back',
                u: 0.506,
                v: 0.180,
                targetType: 'scene',
                targetScene: 'scene5',
                title: 'К печи',
                icon: '',
                width: 50,
                height: 100,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 20,
                transparent: true,
                opacity: 0
            }
        ]
    },
    scene7: {
        id: 'scene7',
        name: 'Сцена 7 | Зал первого этажа',
        type: 'cube',
        cameraSettings: { pitch: 20, yaw: 170, distance: 1 },
        cubeMap: [
            { type: 'image', path: '../images/right7.webp', name: 'right' },
            { type: 'image', path: '../images/left7.webp', name: 'left' },
            { type: 'image', path: '../images/up7.webp', name: 'up' },
            { type: 'image', path: '../images/down7.webp', name: 'down' },
            { type: 'image', path: '../images/front7.webp', name: 'front' },
            { type: 'image', path: '../images/back7.webp', name: 'back', maskPath: '../images/back7_mask.webp' }
        ],
        hotspots: [
            {
                id: 'hotspot7_to_scene4',
                face: 'back',
                u: 0.698,
                v: 0.549,
                targetType: 'scene',
                targetScene: 'scene4',
                title: 'Передняя первого этажа',
                icon: '',
                width: 38,
                height: 45,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 20,
                transparent: true,
                opacity: 0
            }
        ]
    },
    scene8: {
        id: 'scene8',
        name: 'Сцена 8 | Лестница',
        type: 'cube',
        cameraSettings: { pitch: -2, yaw: 170, distance: 1 },
        cubeMap: [
            { type: 'image', path: '../images/right8.webp', name: 'right' },
            { type: 'image', path: '../images/left8.webp', name: 'left' },
            { type: 'image', path: '../images/up8.webp', name: 'up' },
            { type: 'image', path: '../images/down8.webp', name: 'down' },
            { type: 'image', path: '../images/front8.webp', name: 'front', maskPath: '../images/front8_mask.webp' },
            { type: 'image', path: '../images/back8.webp', name: 'back', maskPath: '../images/back8_mask.webp' }
        ],
        hotspots: [
            {
                id: 'hotspot8_to_scene3',
                face: 'back',
                u: 0.505,
                v: 0.702,
                targetType: 'scene',
                targetScene: 'scene3',
                title: 'Лестничная площадка',
                icon: '',
                width: 70,
                height: 35,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 20,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 0, z: 355 }
            },
            {
                id: 'hotspot8_to_scene9',
                face: 'front',
                u: 0.662,
                v: 0.292,
                targetType: 'scene',
                targetScene: 'scene9',
                title: 'Передняя второго этажа',
                icon: '',
                width: 60,
                height: 65,
                depth: 1,
                color: 0xff9800,
                emissiveColor: 0xb85c00,
                offset: 5,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 0, z: 15 }
            }
        ]
    },
    scene9: {
        id: 'scene9',
        name: 'Сцена 9 | Передняя второго этажа',
        type: 'cube',
        cameraSettings: { pitch: 12, yaw: 183, distance: 1 },
        cubeMap: [
            { type: 'image', path: '../images/right9.webp', name: 'right' },
            { type: 'image', path: '../images/left9.webp', name: 'left' },
            { type: 'image', path: '../images/up9.webp', name: 'up' },
            { type: 'image', path: '../images/down9.webp', name: 'down' },
            { type: 'image', path: '../images/front9.webp', name: 'front', maskPath: '../images/front9_mask.webp' },
            { type: 'image', path: '../images/back9.webp', name: 'back', maskPath: '../images/back9_mask.webp' }
        ],
        hotspots: [
            {
                id: 'hotspot9_to_scene8',
                face: 'back',
                u: 0.631,
                v: 0.725,
                targetType: 'scene',
                targetScene: 'scene8',
                title: 'На лестницу',
                icon: '',
                width: 40,
                height: 35,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 20,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 0, z: 20 }
            },
            {
                id: 'hotspot9_to_scene9',
                face: 'left',
                u: 0.55,
                v: 0.387,
                targetType: 'image',
                targetCubeMap: [
                    { type: 'image', path: '../images/right9_2.webp', name: 'right', maskPath: '../images/right9_2_mask.webp' },
                    { type: 'image', path: '../images/front9_2.webp', name: 'front', maskPath: '../images/front9_2_mask.webp' },
                    { type: 'image', path: '../images/down9_2.webp', name: 'down' }
                ],
                title: 'Открыть дверь',
                icon: '',
                width: 92,
                height: 50,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 5,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 90, z: 2 }
            },
            {
                id: 'hotspot9_to_scene10',
                face: 'left',
                u: 0.365,
                v: 0.506,
                targetType: 'scene',
                targetScene: 'scene10',
                title: 'Зал второго этажа',
                icon: '',
                width: 60,
                height: 35,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 20,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 90, z: 358 }
            },
            {
                id: 'hotspot9_to_scene11',
                face: 'front',
                u: 0.727,
                v: 0.499,
                targetType: 'scene',
                targetScene: 'scene11',
                title: 'Проход между комнатами',
                icon: '',
                width: 50,
                height: 47,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 20,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 0, z: 353 }
            }
        ]
    },
    scene10: {
        id: 'scene10',
        name: 'Сцена 10 | Зал второго этажа',
        type: 'cube',
        cameraSettings: { pitch: 20, yaw: 170, distance: 1 },
        cubeMap: [
            { type: 'image', path: '../images/right10.webp', name: 'right' },
            { type: 'image', path: '../images/left10.webp', name: 'left' },
            { type: 'image', path: '../images/up10.webp', name: 'up' },
            { type: 'image', path: '../images/down10.webp', name: 'down' },
            { type: 'image', path: '../images/front10.webp', name: 'front' },
            { type: 'image', path: '../images/back10.webp', name: 'back', maskPath: '../images/back10_mask.webp' }
        ],
        hotspots: [
            {
                id: 'hotspot10_to_scene9',
                face: 'back',
                u: 0.729,
                v: 0.51,
                targetType: 'scene',
                targetScene: 'scene9',
                title: 'Передняя второго этажа',
                icon: '',
                width: 90,
                height: 50,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 20,
                transparent: true,
                opacity: 0
            }
        ]
    },
    scene11: {
        id: 'scene11',
        name: 'Сцена 11 | Проход между комнатами',
        type: 'cube',
        cameraSettings: { pitch: 20, yaw: 155, distance: 1 },
        cubeMap: [
            { type: 'image', path: '../images/right11.webp', name: 'right' },
            { type: 'image', path: '../images/left11.webp', name: 'left' },
            { type: 'image', path: '../images/up11.webp', name: 'up' },
            { type: 'image', path: '../images/down11.webp', name: 'down' },
            { type: 'image', path: '../images/front11.webp', name: 'front', maskPath: '../images/front11_mask.webp' },
            { type: 'image', path: '../images/back11.webp', name: 'back', maskPath: '../images/back11_mask.webp' }
        ],
        hotspots: [
            {
                id: 'hotspot11_to_scene9',
                face: 'back',
                u: 0.262,
                v: 0.352,
                targetType: 'scene',
                targetScene: 'scene9',
                title: 'Передняя второго этажа',
                icon: '',
                width: 122,
                height: 63,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 20,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 0, z: 359 }
            },
            {
                id: 'hotspot11_to_scene12',
                face: 'front',
                u: 0.601,
                v: 0.49,
                targetType: 'scene',
                targetScene: 'scene12',
                title: 'Гостиная',
                icon: '',
                width: 122,
                height: 62,
                depth: 1,
                color: 0xff9800,
                emissiveColor: 0xb85c00,
                offset: 5,
                transparent: true,
                opacity: 0,
                rotate: { x: 0, y: 0, z: 1 }
            }
        ]
    },
    scene12: {
        id: 'scene12',
        name: 'Сцена 12 | Гостиная',
        type: 'cube',
        cameraSettings: { pitch: 20, yaw: 170, distance: 1 },
        cubeMap: [
            { type: 'image', path: '../images/right12.webp', name: 'right' },
            { type: 'image', path: '../images/left12.webp', name: 'left' },
            { type: 'image', path: '../images/up12.webp', name: 'up' },
            { type: 'image', path: '../images/down12.webp', name: 'down' },
            { type: 'image', path: '../images/front12.webp', name: 'front', maskPath: '../images/front12_mask.webp' },
            { type: 'image', path: '../images/back12.webp', name: 'back', maskPath: '../images/back12_mask.webp' }
        ],
        vkVideo: {  
        enabled: true,
        videoId: '-111742052_456239632',
        position: { x: 0, y: 0, z: 500 },
        width: 800,
        height: 600,
        autoplay: false
        },		
        hotspots: [
            {
                id: 'hotspot12_to_scene11',
                face: 'back',
                u: 0.267,
                v: 0.451,
                targetType: 'scene',
                targetScene: 'scene11',
                title: 'Проход между комнатами',
                icon: '',
                width: 122,
                height: 63,
                depth: 1,
                color: 0x66ff33,
                emissiveColor: 0x226611,
                offset: 20,
                transparent: true,
                opacity: 0
            },
            {
            id: 'hotspot_play_vk_video',
            face: 'front',
            u: 0.857,
            v: 0.748,
            targetType: 'vkvideoplayer',
            title: 'Видео «Дом Столбова»',
            width: 53,
            height: 56,
            depth: 1,
            color: 0xff3366,
            emissiveColor: 0x441122,
            offset: 20,
            transparent: true,
            opacity: 0,
			rotate: { x: 0, y: 0, z: 350 }
           },
           {
                id: 'hotspot_show_book_2',
                face: 'left',
                u: 0.559,
                v: 0.47,
                targetType: 'book', 
				bookId: 'book2', 
                action: 'showBook',
                title: 'История Глазовской районной библиотеки',
                icon: '',
                width: 34,
                height: 40,
                depth: 1,
                color: 0xfff,
                emissiveColor: 0x441122,
                offset: 20,
                transparent: true,
                opacity: 0,
				rotate: { x: 0, y: 90, z: 0 }
           }
        ]
    }
};

let scene4DoorState = null;
let scene5TextureState = null;
let scene5TextureStatePersistent = null;
let scene9DoorOpen = false;
let currentSceneId = 'scene1';
let currentScene = null;
let isTransitioning = false;
let currentVideoElements = [];
let raycaster = new MOY.Raycaster();
let mouse = new MOY.Vector2();

let navigationVisible = true;
let isReloading = false;

let bookFlipInstance = null;
let bookContainer = null;

const scene = new MOY.Scene();
scene.background = new MOY.Color(0x000000);
const camera = new MOY.PerspectiveCamera(78.5, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 0.1);
const renderer = new MOY.WebGLRenderer({
    antialias: true,
    powerPreference: "high-performance",
    alpha: false
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enablePan = false;
controls.zoomSpeed = 0.5;
controls.rotateSpeed = 0.2;
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.minPolarAngle = 66 * Math.PI / 180;

function disableAllZoom() {
    window.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            const key = e.key;
            if (key === '+' || key === '-' || key === '=' || key === '0' ||
                key === 'Add' || key === 'Subtract' || key === 'NumpadAdd' || key === 'NumpadSubtract') {
                e.preventDefault();
                return false;
            }
        }
    });

    const style = document.createElement('style');
    style.textContent = `* { -webkit-text-size-adjust: none; text-size-adjust: none; }`;
    document.head.appendChild(style);

    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
        return false;
    }, { passive: false });

    document.addEventListener('dblclick', function(e) {
        e.preventDefault();
        return false;
    }, { passive: false });
}

disableAllZoom();

window.addEventListener('wheel', function(e) {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        return false;
    }

    const isScrollable = e.target.closest('[data-scrollable="true"]') ||
                         e.target.closest('.scrollable') ||
                         (e.target.scrollHeight > e.target.clientHeight);
    
    if (!isScrollable) {
    }
}, { passive: false });

let hotspotsObjects = [];
let currentCubeMaterials = null;
let currentCube = null;
let currentTexturesPaths = null;
let currentCustomTextures = null;

let centerTooltip = null;
function createCenterTooltip() {
    if (centerTooltip) return;
    centerTooltip = document.createElement('div');
    centerTooltip.className = 'center-tooltip';
    centerTooltip.style.cssText = `
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(112, 98, 73, 0.8);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    z-index: 2000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    pointer-events: none;
    white-space: nowrap;
`;

    document.body.appendChild(centerTooltip);
}
function showCenterTooltip(text) {
    if (!centerTooltip) createCenterTooltip();
    if (text) {
        centerTooltip.textContent = text;
        centerTooltip.style.opacity = '1';
        centerTooltip.style.visibility = 'visible';
    }
}
function hideCenterTooltip() {
    if (centerTooltip) {
        centerTooltip.style.opacity = '0';
        centerTooltip.style.visibility = 'hidden';
    }
}

let navButton = null;
function createNavButton() {
    if (navButton) return;
    navButton = document.createElement('button');
    navButton.className = 'nav-toggle-button';
    navButton.textContent = 'Скрыть навигацию';
    navButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1002;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #f3f3f3;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

    navButton.addEventListener('mouseenter', () => {
        navButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    });

    navButton.addEventListener('mouseleave', () => {
        navButton.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    });

    navButton.addEventListener('click', toggleNavigation);

    document.body.appendChild(navButton);

    if (currentSceneId === 'scene1') {
        navButton.style.display = 'none';
    }
}

function toggleHotspotsVisibility(hide) {
    hotspotsObjects.forEach(hotspot => {
        if (hide) {
            hotspot.visible = false;
            hotspot.userData.disabled = true;
        } else {
            hotspot.visible = true;
            hotspot.userData.disabled = false;
        }
    });
    if (hide) {
        hideCenterTooltip();
    }
}

let cameraState = {
    position: null,
    target: null,
    pitch: 0,
    yaw: 0,
    zoom: 1
};
function saveCameraState() {
    cameraState = {
        position: camera.position.clone(),
        target: controls.target.clone(),
        pitch: controls.getPolarAngle(),
        yaw: controls.getAzimuthalAngle(),
        zoom: camera.zoom || 1
    };
}
function restoreCameraState() {
    if (cameraState.position) {
        camera.position.copy(cameraState.position);
    }
    if (cameraState.target) {
        controls.target.copy(cameraState.target);
    }
    controls.object.rotation.order = 'YXZ';
    controls.object.rotation.x = cameraState.pitch;
    controls.object.rotation.y = cameraState.yaw;
    controls.object.rotation.z = 0;

    controls.update();
}

async function toggleNavigation() {
    if (isReloading || isTransitioning) return;
    isReloading = true;
    saveCameraState();

    const savedHotspotsState = saveScene5HotspotsState();
    const savedScene9State = saveScene9State();

    const savedScene4DoorState = scene4DoorState;
    const savedScene5TextureState = scene5TextureStatePersistent || scene5TextureState;
    const savedScene9DoorOpen = scene9DoorOpen;

    navigationVisible = !navigationVisible;

    if (navigationVisible) {
        navButton.textContent = 'Скрыть навигацию';
    } else {
        navButton.textContent = 'Включить навигацию';
    }

    toggleHotspotsVisibility(!navigationVisible);

    await reloadCurrentSceneWithTextureMode(savedHotspotsState);

    if (savedScene4DoorState) {
        scene4DoorState = savedScene4DoorState;
    }
    if (savedScene5TextureState) {
        scene5TextureStatePersistent = savedScene5TextureState;
        scene5TextureState = savedScene5TextureState;
    }
    if (savedScene9State) {
        await restoreScene9State(savedScene9State);
    }

    restoreCameraState();
    controls.update();

    requestAnimationFrame(() => {
        restoreCameraState();
        controls.update();
        renderer.render(scene, camera);
    });

    setTimeout(() => {
        restoreCameraState();
        controls.update();
        renderer.render(scene, camera);
        isReloading = false;
    }, 100);
}

async function reloadCurrentSceneWithTextureMode(savedHotspotsState = null) {
    if (!currentScene) return;
    const hotspotsState = savedHotspotsState || saveScene5HotspotsState();
    const scene9State = saveScene9State();

    const sceneData = currentScene;
    const cubeMapItems = sceneData.cubeMap;
    const oldCube = currentCube;
    const oldMaterials = currentCubeMaterials;

    const isScene4 = currentSceneId === 'scene4';
    const scene4VideoState = isScene4 ? scene4DoorState : null;
    const isScene5 = currentSceneId === 'scene5';
    const scene5TextureStateForReload = isScene5 ? (scene5TextureStatePersistent || scene5TextureState) : null;
    const isScene9 = currentSceneId === 'scene9';

    const texturesToLoad = cubeMapItems.map((item, index) => {
        const faceName = item.name;
        let targetPath;
        let itemType = item.type;

        if (isScene4 && faceName === 'front' && scene4VideoState && scene4VideoState !== 'default') {
            const videoFile = scene4VideoState === 'video1' ? 'front4_1' : 'front4_2';
            if (!navigationVisible && item.maskPath) {
                targetPath = `../video/${videoFile}_mask.webm`;
                itemType = 'video';
            } else if (navigationVisible) {
                targetPath = `../video/${videoFile}.webm`;
                itemType = 'video';
            } else {
                targetPath = item.path;
                itemType = item.type;
            }
        }
        else if (isScene5 && faceName === 'front' && scene5TextureStateForReload) {
            if (scene5TextureStateForReload === 'video1') {
                if (!navigationVisible && item.maskPath) {
                    targetPath = '../video/front5_1_mask.webm';
                    itemType = 'video';
                } else {
                    targetPath = '../video/front5_1.webm';
                    itemType = 'video';
                }
            } else if (scene5TextureStateForReload === 'video2') {
                if (!navigationVisible && item.maskPath) {
                    targetPath = '../video/front5_2_mask.webm';
                    itemType = 'video';
                } else {
                    targetPath = '../video/front5_2.webm';
                    itemType = 'video';
                }
            } else if (scene5TextureStateForReload === 'closed') {
                if (!navigationVisible && item.maskPath) {
                    targetPath = item.maskPath;
                    itemType = 'image';
                } else {
                    targetPath = item.path;
                    itemType = 'image';
                }
            } else {
                targetPath = navigationVisible ? item.path : (item.maskPath || item.path);
                itemType = item.type;
            }
        }
        else if (isScene9 && (faceName === 'front' || faceName === 'right' || faceName === 'down')) {
            let basePath = item.path;
            if (scene9DoorOpen) {
                if (faceName === 'front') basePath = '../images/front9_2.webp';
                else if (faceName === 'right') basePath = '../images/right9_2.webp';
                else if (faceName === 'down') basePath = '../images/down9_2.webp';
            } else {
                if (faceName === 'front') basePath = '../images/front9.webp';
                else if (faceName === 'right') basePath = '../images/right9.webp';
                else if (faceName === 'down') basePath = '../images/down9.webp';
            }
            let maskPath = null;
            if (faceName === 'front') maskPath = scene9DoorOpen ? '../images/front9_2_mask.webp' : '../images/front9_mask.webp';
            else if (faceName === 'right') maskPath = scene9DoorOpen ? '../images/right9_2_mask.webp' : '../images/right9_mask.webp';
            else if (faceName === 'down') maskPath = null;

            targetPath = navigationVisible ? basePath : (maskPath || basePath);
            itemType = 'image';
        }
        else if (currentCustomTextures && currentCustomTextures[faceName]) {
            const customTexture = currentCustomTextures[faceName];
            if (navigationVisible) {
                targetPath = customTexture.path;
            } else {
                targetPath = customTexture.maskPath || customTexture.path;
            }
            itemType = customTexture.type;
        } else {
            targetPath = navigationVisible ? item.path : (item.maskPath || item.path);
        }

        return {
            type: itemType,
            path: targetPath,
            name: item.name
        };
    });

    const { materials, videos } = await loadCubeFacesWithPaths(texturesToLoad);
    const newCube = createCube(materials);

    newCube.material.forEach(mat => {
        mat.transparent = true;
        mat.opacity = 0;
    });

    scene.add(newCube);

    const duration = 500;
    const startTime = performance.now();

    function animateCrossFade(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / duration);

        newCube.material.forEach(mat => {
            mat.opacity = progress;
        });

        if (oldCube) {
            oldCube.material.forEach(mat => {
                mat.opacity = 1 - progress;
            });
        }

        if (progress < 1) {
            requestAnimationFrame(animateCrossFade);
        } else {
            if (oldCube) {
                scene.remove(oldCube);
                if (oldMaterials && Array.isArray(oldMaterials)) {
                    oldMaterials.forEach(mat => {
                        if (mat.map && !mat.map.isVideoTexture) {
                            mat.map.dispose();
                        }
                        mat.dispose();
                    });
                }
            }

            newCube.material.forEach(mat => {
                mat.transparent = false;
                mat.opacity = 1;
            });

            currentCube = newCube;
            currentCubeMaterials = materials;
            currentVideoElements = videos || [];

            if (currentCustomTextures) {
                for (const [faceName, customTexture] of Object.entries(currentCustomTextures)) {
                    const faceIndex = { 'right': 0, 'left': 1, 'up': 2, 'down': 3, 'front': 4, 'back': 5 }[faceName];
                    if (faceIndex !== undefined && currentCubeMaterials[faceIndex]) {
                        customTexture.currentTexture = currentCubeMaterials[faceIndex].map;
                    }
                }
            }

            if (currentVideoElements) {
                currentVideoElements.forEach(video => {
                    if (video && video.play) {
                        video.play().catch(e => {/* console.log removed */});
                    }
                });
            }

            if (hotspotsState) {
                restoreScene5HotspotsState(hotspotsState);
            }

            if (scene9State) {
                restoreScene9State(scene9State);
            }

            if (isScene4 && scene4VideoState && scene4VideoState !== 'default') {
            }
        }
    }

    if (hotspotsState) {
        restoreScene5HotspotsState(hotspotsState);
    }
    requestAnimationFrame(animateCrossFade);
}

if (!window.videoTextureCache) window.videoTextureCache = {};

async function loadTextureItemWithPath(item, index) {
    if (item.type === 'video') {
        if (!window.videoTextureCache) window.videoTextureCache = {};
        if (!window.preloadedVideos) window.preloadedVideos = {};
        if (window.videoTextureCache[item.path]) {
            const cached = window.videoTextureCache[item.path];
            return {
                texture: cached.texture,
                video: cached.video
            };
        }

        let videoElement = window.preloadedVideos[item.path];

        if (!videoElement) {
            videoElement = document.createElement('video');
            videoElement.src = item.path;
            videoElement.loop = true;
            videoElement.muted = true;
            videoElement.playsInline = true;
            videoElement.crossOrigin = 'anonymous';
            videoElement.preload = 'auto';

            window.preloadedVideos[item.path] = videoElement;
        }
        if (videoElement.readyState < 2) {
            await new Promise((resolve, reject) => {
                const onReady = () => {
                    cleanup();
                    resolve();
                };

                const onError = (e) => {
                    cleanup();
                    reject(e);
                };

                const cleanup = () => {
                    videoElement.removeEventListener('loadeddata', onReady);
                    videoElement.removeEventListener('canplay', onReady);
                    videoElement.removeEventListener('error', onError);
                };

                videoElement.addEventListener('loadeddata', onReady);
                videoElement.addEventListener('canplay', onReady);
                videoElement.addEventListener('error', onError);

                videoElement.load();
            });
        }
		
        try {
            await videoElement.play();
        } catch (e) {
        }

        const videoTexture = new MOY.VideoTexture(videoElement);
        videoTexture.minFilter = MOY.LinearFilter;
        videoTexture.magFilter = MOY.LinearFilter;

        window.videoTextureCache[item.path] = {
            texture: videoTexture,
            video: videoElement
        };

        return {
            texture: videoTexture,
            video: videoElement
        };
    }
    else {
        const textureLoader = new MOY.TextureLoader();

        const texture = await new Promise((resolve, reject) => {
            textureLoader.load(
                item.path,
                (tex) => resolve(tex),
                undefined,
                (err) => reject(err)
            );
        });

        texture.minFilter = MOY.LinearFilter;
        texture.magFilter = MOY.LinearFilter;

        return {
            texture: texture,
            video: null
        };
    }
}

async function loadCubeFacesWithPaths(cubeMapItems) {
    const textures = [];
    const videos = [];
    for (let i = 0; i < cubeMapItems.length; i++) {
        const result = await loadTextureItemWithPath(cubeMapItems[i], i);
        textures[i] = result.texture;
        videos[i] = result.video;
    }

    const materials = textures.map(texture =>
        new MOY.MeshBasicMaterial({
            map: texture,
            side: MOY.BackSide
        })
    );

    return { materials, videos };
}

async function replaceTextureOnFace(faceName, newTextureItem, currentMaterials, useMask = false) {
    const faceIndices = {
        'right': 0, 'left': 1, 'up': 2, 'down': 3, 'front': 4, 'back': 5
    };
    const faceIndex = faceIndices[faceName];
    if (faceIndex === undefined) return false;

    try {
        let texturePath;
        if (useMask && newTextureItem.maskPath) {
            texturePath = newTextureItem.maskPath;
        } else {
            texturePath = newTextureItem.path;
        }

        if (!currentCustomTextures) currentCustomTextures = {};
        currentCustomTextures[faceName] = {
            ...newTextureItem,
            currentPath: texturePath,
            useMask: useMask
        };

        let newTexture;
        let videoElement = null;

        if (newTextureItem.type === 'video') {
            if (window.videoTextureCache[texturePath]) {
                newTexture = window.videoTextureCache[texturePath].texture;
                videoElement = window.videoTextureCache[texturePath].video;
            } else if (window.preloadedVideos?.[texturePath]) {
                videoElement = window.preloadedVideos[texturePath];

                if (videoElement.readyState < 2) {
                    await new Promise((resolve) => {
                        const onReady = () => resolve();
                        videoElement.addEventListener('canplay', onReady, { once: true });
                        if (videoElement.readyState >= 2) resolve();
                    });
                }

                newTexture = new MOY.VideoTexture(videoElement);
                newTexture.minFilter = MOY.LinearFilter;
                newTexture.magFilter = MOY.LinearFilter;

                window.videoTextureCache[texturePath] = {
                    texture: newTexture,
                    video: videoElement
                };
            } else {
                videoElement = document.createElement('video');
                videoElement.src = texturePath;
                videoElement.loop = true;
                videoElement.muted = true;
                videoElement.autoplay = true;
                videoElement.playsInline = true;
                videoElement.crossOrigin = 'anonymous';

                await new Promise((resolve, reject) => {
                    const timeout = setTimeout(() => reject(new Error('Video load timeout')), 10000);
                    videoElement.addEventListener('canplay', () => {
                        clearTimeout(timeout);
                        resolve();
                    }, { once: true });
                    videoElement.addEventListener('error', (e) => {
                        clearTimeout(timeout);
                        reject(e);
                    }, { once: true });
                    videoElement.load();
                });

                newTexture = new MOY.VideoTexture(videoElement);
                newTexture.minFilter = MOY.LinearFilter;
                newTexture.magFilter = MOY.LinearFilter;

                window.videoTextureCache[texturePath] = {
                    texture: newTexture,
                    video: videoElement
                };
            }

            if (videoElement && videoElement.play) {
                videoElement.currentTime = 0;
                videoElement.play().catch(e => {/* console.log removed */});
            }

        } else {
            const textureLoader = new MOY.TextureLoader();
            newTexture = await new Promise((resolve, reject) => {
                textureLoader.load(texturePath,
                    (texture) => {
                        texture.minFilter = MOY.LinearFilter;
                        texture.magFilter = MOY.LinearFilter;
                        resolve(texture);
                    },
                    undefined,
                    (error) => reject(error)
                );
            });
        }

        if (currentCubeMaterials && currentCubeMaterials[faceIndex]) {
            const targetMaterial = currentCubeMaterials[faceIndex];
            const oldTexture = targetMaterial.map;

            const facePositions = {
                'right': { pos: [500, 0, 0], rotation: [0, Math.PI / 2, 0] },
                'left': { pos: [-500, 0, 0], rotation: [0, -Math.PI / 2, 0] },
                'up': { pos: [0, 500, 0], rotation: [-Math.PI / 2, 0, 0] },
                'down': { pos: [0, -500, 0], rotation: [Math.PI / 2, 0, 0] },
                'front': { pos: [0, 0, -500], rotation: [0, 0, 0] },
                'back': { pos: [0, 0, -500], rotation: [0, Math.PI, 0] }
            };

            const faceInfo = facePositions[faceName];

            const overlayGeometry = new MOY.PlaneGeometry(1000, 1000);
            const overlayMaterial = new MOY.MeshBasicMaterial({
                map: newTexture,
                transparent: true,
                opacity: 0,
                side: MOY.DoubleSide,
                depthTest: true,
                depthWrite: false
            });

            const overlayPlane = new MOY.Mesh(overlayGeometry, overlayMaterial);
            overlayPlane.position.set(...faceInfo.pos);
            overlayPlane.rotation.set(...faceInfo.rotation);

            scene.add(overlayPlane);

            const duration = 400;
            const startTime = performance.now();

            function animateOverlay(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(1, elapsed / duration);

                overlayMaterial.opacity = progress;

                if (progress < 1) {
                    requestAnimationFrame(animateOverlay);
                } else {
                    targetMaterial.map = newTexture;
                    targetMaterial.needsUpdate = true;

                    if (oldTexture && !window.videoTextureCache[oldTexture.image?.src]) {
                        if (oldTexture.isVideoTexture && oldTexture.image) {
                        } else if (!oldTexture.isVideoTexture) {
                            oldTexture.dispose();
                        }
                    }

                    scene.remove(overlayPlane);
                    overlayGeometry.dispose();
                    overlayMaterial.dispose();

                    if (videoElement) {
                        if (!currentVideoElements) currentVideoElements = [];
                        currentVideoElements[faceIndex] = videoElement;
                    }
                }
            }

            requestAnimationFrame(animateOverlay);
        }

        return true;

    } catch (error) {
        console.error(`Ошибка замены текстуры для грани ${faceName}:`, error);
        return false;
    }
}

function stopAllVideos() {
    if (currentVideoElements) {
        currentVideoElements.forEach(video => {
            if (video && video.pause) {
                video.pause();
            }
        });
    }
}

function getPositionOnCubeFace(face, u, v, size = 500) {
    const xPos = (u - 0.5) * size;
    const yPos = (0.5 - v) * size;
    switch (face) {
        case 'right':
            return new MOY.Vector3(size / 2, yPos, xPos);
        case 'left':
            return new MOY.Vector3(-size / 2, yPos, -xPos);
        case 'up':
            return new MOY.Vector3(xPos, size / 2, yPos);
        case 'down':
            return new MOY.Vector3(xPos, -size / 2, -yPos);
        case 'front':
            return new MOY.Vector3(xPos, yPos, size / 2);
        case 'back':
            return new MOY.Vector3(-xPos, yPos, -size / 2);
        default:
            return new MOY.Vector3(0, 0, 0);
    }
}

function create3DHotspot(hotspotData, cubeSize = 500) {
    const width = hotspotData.width || 75;
    const height = hotspotData.height || 75;
    const depth = hotspotData.depth || 75;
    const geometry = new MOY.BoxGeometry(width, height, depth);

    const color = hotspotData.color || 0xff0000;
    const emissiveColor = hotspotData.emissiveColor || 0x440000;

    const material = new MOY.MeshStandardMaterial({
        color: color,
        emissive: emissiveColor,
        transparent: hotspotData.transparent || false,
        opacity: hotspotData.opacity || 1,
        visible: hotspotData.opacity !== 0
    });

    const hotspotMesh = new MOY.Mesh(geometry, material);

    const position = getPositionOnCubeFace(hotspotData.face, hotspotData.u, hotspotData.v, cubeSize);
    hotspotMesh.position.copy(position);

    if (hotspotData.rotate) {
        const euler = new MOY.Euler(
            (hotspotData.rotate.x || 0) * Math.PI / 180,
            (hotspotData.rotate.y || 0) * Math.PI / 180,
            (hotspotData.rotate.z || 0) * Math.PI / 180,
            'XYZ'
        );
        hotspotMesh.rotation.copy(euler);
    }

    const offset = hotspotData.offset || 20;
    switch (hotspotData.face) {
        case 'right':
            hotspotMesh.position.x -= offset;
            break;
        case 'left':
            hotspotMesh.position.x += offset;
            break;
        case 'up':
            hotspotMesh.position.y -= offset;
            break;
        case 'down':
            hotspotMesh.position.y += offset;
            break;
        case 'front':
            hotspotMesh.position.z -= offset;
            break;
        case 'back':
            hotspotMesh.position.z += offset;
            break;
    }

    hotspotMesh.userData = {
        hotspotData: hotspotData,
        isHotspot: true,
        title: hotspotData.title
    };

    return hotspotMesh;
}

function removeAllHotspots() {
    hotspotsObjects.forEach(obj => {
        if (obj.parent) {
            scene.remove(obj);
        }
    });
    hotspotsObjects = [];
}

function createAllHotspots(hotspots, cubeSize = 500) {
    if (!hotspots || hotspots.length === 0) return;
    hotspots.forEach(hotspotData => {
        try {
            const hotspot3D = create3DHotspot(hotspotData, cubeSize);
            scene.add(hotspot3D);
            hotspotsObjects.push(hotspot3D);
        } catch (error) {
            console.error(`Ошибка создания хотспота ${hotspotData.id}:`, error);
        }
    });

    if (currentSceneId === 'scene5') {
        setupScene5HotspotsState();
    }

    if (currentSceneId === 'scene9') {
        setupScene9HotspotsState();
    }
}

function onMouseClick(event) {
    if (isTransitioning || isReloading) return;
	
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(hotspotsObjects);

    if (intersects.length > 0) {
        const hit = intersects[0];
        const hotspotData = hit.object.userData.hotspotData;

        if (hotspotData && !hit.object.userData.disabled) {
            handleHotspotClick(hotspotData);
        }
    }
}

let hoveredHotspot = null;
function onMouseMove(event) {
    if (isTransitioning || isReloading) return;
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(hotspotsObjects);

    if (intersects.length > 0) {
        const hit = intersects[0];
        const hotspotData = hit.object.userData.hotspotData;

        if (hotspotData && !hit.object.userData.disabled && hit.object.visible) {
            if (hoveredHotspot !== hit.object) {
                hoveredHotspot = hit.object;
                renderer.domElement.classList.add('hovering-hotspot');

                if (hotspotData.title) {
                    showCenterTooltip(hotspotData.title);
                }
            }
        } else {
            if (hoveredHotspot) {
                hoveredHotspot = null;
                hideCenterTooltip();
                renderer.domElement.classList.remove('hovering-hotspot');
            }
        }
    } else {
        if (hoveredHotspot) {
            hoveredHotspot = null;
            hideCenterTooltip();
            renderer.domElement.classList.remove('hovering-hotspot');
        }
    }
}

renderer.domElement.addEventListener('mousedown', () => {
    renderer.domElement.style.cursor = 'grabbing';
});
renderer.domElement.addEventListener('mouseup', () => {
    if (hoveredHotspot) {
        renderer.domElement.classList.add('hovering-hotspot');
        renderer.domElement.style.cursor = '';
    } else {
        renderer.domElement.classList.remove('hovering-hotspot');
        renderer.domElement.style.cursor = 'default';
    }
});
renderer.domElement.addEventListener('mouseleave', () => {
    if (hoveredHotspot) {
        renderer.domElement.classList.remove('hovering-hotspot');
        hoveredHotspot = null;
        hideCenterTooltip();
    }
    renderer.domElement.style.cursor = 'default';
});
renderer.domElement.addEventListener('mouseenter', () => {
    if (hoveredHotspot) {
        renderer.domElement.classList.add('hovering-hotspot');
    }
});

function loadTextureItem(item, index) {
    return new Promise((resolve) => {
        const textureLoader = new MOY.TextureLoader();
        textureLoader.load(item.path,
            (texture) => {
                texture.minFilter = MOY.LinearFilter;
                texture.magFilter = MOY.LinearFilter;
                resolve({ texture: texture, video: null });
            },
            undefined,
            (error) => {
                console.warn(`Ошибка загрузки ${item.path}:`, error);
                const canvas = document.createElement('canvas');
                canvas.width = 512;
                canvas.height = 512;
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = `hsl(${index * 60}, 70%, 50%)`;
                ctx.fillRect(0, 0, 512, 512);
                const fallbackTexture = new MOY.CanvasTexture(canvas);
                resolve({ texture: fallbackTexture, video: null });
            }
        );
    });
}

async function loadCubeFaces(cubeMapItems) {
    const textures = [];
    const videos = [];
    for (let i = 0; i < cubeMapItems.length; i++) {
        const result = await loadTextureItem(cubeMapItems[i], i);
        textures[i] = result.texture;
        videos[i] = result.video;
    }

    const materials = textures.map(texture =>
        new MOY.MeshBasicMaterial({
            map: texture,
            side: MOY.BackSide
        })
    );

    return { materials, videos };
}

function createCube(materials) {
    const geometry = new MOY.BoxGeometry(1000, 1000, 1000);
    const cube = new MOY.Mesh(geometry, materials);
    cube.scale.x = -1;
    cube.matrixAutoUpdate = true;
    return cube;
}

async function switchToScene(sceneId, fromFace = null, fromSceneId = null) {
    if (isTransitioning) return;
    if (!scenes[sceneId]) {
        console.error(`Сцена ${sceneId} не найдена`);
        return;
    }
    const leavingSceneId = currentSceneId;
    let leavingSceneAction = null;

    if (leavingSceneId === 'scene5') {
        if (window.lastScene5Action) {
            leavingSceneAction = window.lastScene5Action;
        }

        if (scene5TextureStatePersistent) {
            scene5TextureState = scene5TextureStatePersistent;
        } else {
            if (currentCustomTextures && currentCustomTextures['front']) {
                const frontTexture = currentCustomTextures['front'];
                if (frontTexture.path === '../video/front5_1.webm') {
                    scene5TextureState = 'video1';
                } else if (frontTexture.path === '../video/front5_2.webm') {
                    scene5TextureState = 'video2';
                } else if (frontTexture.path === '../images/front5.webp') {
                    scene5TextureState = 'closed';
                } else {
                    scene5TextureState = null;
                }
            } else {
                scene5TextureState = null;
            }
        }
    }

    if (leavingSceneId === 'scene9') {
        const savedScene9State = saveScene9State();
        if (savedScene9State) {
            window.lastScene9State = savedScene9State;
        }
    }

    if (sceneId === 'scene4' && leavingSceneId === 'scene5') {
    }

    hideCenterTooltip();
    isTransitioning = true;
    stopAllVideos();
    currentCustomTextures = null;

    try {
        const targetScene = scenes[sceneId];

        let texturesToLoad = targetScene.cubeMap.map(item => ({
            type: item.type,
            path: navigationVisible ? item.path : (item.maskPath || item.path),
            name: item.name
        }));

        let pendingVideoState = null;
        if (sceneId === 'scene4') {
            const frontIndex = texturesToLoad.findIndex(item => item.name === 'front');
            if (frontIndex !== -1) {
                if (scene4DoorState && scene4DoorState !== 'default') {
                    const videoFile = scene4DoorState === 'video1' ? 'front4_1' : 'front4_2';
                    const videoPath = navigationVisible ? `../video/${videoFile}.webm` : `../video/${videoFile}_mask.webm`;
                    texturesToLoad[frontIndex] = {
                        type: 'video',
                        path: videoPath,
                        name: 'front',
                        maskPath: `../video/${videoFile}_mask.webm`
                    };
                } else {
                    texturesToLoad[frontIndex] = {
                        type: 'image',
                        path: '../images/front4.webp',
                        name: 'front',
                        maskPath: '../images/front4_mask.webp'
                    };
                }
            }
        }

        if (sceneId === 'scene5' && scene5TextureState) {

            const frontIndex = texturesToLoad.findIndex(item => item.name === 'front');

            if (frontIndex !== -1) {
                if (scene5TextureState === 'video1') {
                    texturesToLoad[frontIndex] = {
                        type: 'video',
                        path: '../video/front5_1.webm',
                        name: 'front',
                        maskPath: '../video/front5_1_mask.webm'
                    };
                } else if (scene5TextureState === 'video2') {
                    texturesToLoad[frontIndex] = {
                        type: 'video',
                        path: '../video/front5_2.webm',
                        name: 'front',
                        maskPath: '../video/front5_2_mask.webm'
                    };
                } else if (scene5TextureState === 'closed') {
                    texturesToLoad[frontIndex] = {
                        type: 'image',
                        path: '../images/front5.webp',
                        name: 'front',
                        maskPath: '../images/front5_mask.webp'
                    };
                }
            }
        }

        let savedScene9State = null;
        if (sceneId === 'scene9') {
            if (window.lastScene9State) {
                savedScene9State = window.lastScene9State;
                scene9DoorOpen = savedScene9State.doorOpen;
            } else {
                scene9DoorOpen = false;
            }

            const frontIndex = texturesToLoad.findIndex(item => item.name === 'front');
            const rightIndex = texturesToLoad.findIndex(item => item.name === 'right');
            const downIndex = texturesToLoad.findIndex(item => item.name === 'down');

            if (scene9DoorOpen) {
                if (frontIndex !== -1) {
                    texturesToLoad[frontIndex] = {
                        type: 'image',
                        path: navigationVisible ? '../images/front9_2.webp' : '../images/front9_2_mask.webp',
                        name: 'front',
                        maskPath: '../images/front9_2_mask.webp'
                    };
                }
                if (rightIndex !== -1) {
                    texturesToLoad[rightIndex] = {
                        type: 'image',
                        path: navigationVisible ? '../images/right9_2.webp' : '../images/right9_2_mask.webp',
                        name: 'right',
                        maskPath: '../images/right9_2_mask.webp'
                    };
                }
                if (downIndex !== -1) {
                    texturesToLoad[downIndex] = {
                        type: 'image',
                        path: '../images/down9_2.webp',
                        name: 'down',
                        maskPath: null
                    };
                }
            } else {
                if (frontIndex !== -1) {
                    texturesToLoad[frontIndex] = {
                        type: 'image',
                        path: navigationVisible ? '../images/front9.webp' : '../images/front9_mask.webp',
                        name: 'front',
                        maskPath: '../images/front9_mask.webp'
                    };
                }
                if (rightIndex !== -1) {
                    texturesToLoad[rightIndex] = {
                        type: 'image',
                        path: navigationVisible ? '../images/right9.webp' : '../images/right9_mask.webp',
                        name: 'right',
                        maskPath: '../images/right9_mask.webp'
                    };
                }
            }
        }

        const { materials, videos } = await loadCubeFacesWithPaths(texturesToLoad);

        if (videos && videos.length > 0) {
            await Promise.all(videos.map(video => {
                if (!video) return Promise.resolve();
                if (video.readyState >= 2) return Promise.resolve();
                return new Promise(resolve => {
                    video.addEventListener('loadeddata', () => resolve(), { once: true });
                    if (video.readyState >= 2) resolve();
                });
            }));
        }

        const newCube = createCube(materials);
        scene.add(newCube);

        if (currentCube) {
            scene.remove(currentCube);
            if (currentCubeMaterials && Array.isArray(currentCubeMaterials)) {
                currentCubeMaterials.forEach(mat => {
                    if (mat.map && !mat.map.isVideoTexture) {
                        mat.map.dispose();
                    }
                    mat.dispose();
                });
            }
        }

        removeAllHotspots();

        currentCube = newCube;
        currentCubeMaterials = materials;
        currentVideoElements = videos || [];
        currentScene = targetScene;
        currentSceneId = sceneId;

        createAllHotspots(targetScene.hotspots, 1000);

        if (sceneId === 'scene5') {
            setupScene5HotspotsState();
        }

        if (sceneId === 'scene5') {
            if (leavingSceneAction) {
                restoreScene5StateFromAction(leavingSceneAction);
            } else if (scene5TextureState) {
                restoreScene5StateFromTexture(scene5TextureState);
            }
        }

        if (sceneId === 'scene9' && savedScene9State) {
            await restoreScene9State(savedScene9State);
        } else if (sceneId === 'scene9') {
            setupScene9HotspotsState();
        }

        if (targetScene.cameraSettings) {
            let cameraSettings = { ...targetScene.cameraSettings };

            if (sceneId === 'scene4') {
                const fromScene = fromSceneId || leavingSceneId;
                if (fromScene === 'scene3') {
                    cameraSettings.yaw = 180;
                } else if (fromScene === 'scene5' || fromScene === 'scene7') {
                    cameraSettings.yaw = 0;
                } else if (fromFace === 'front') {
                    cameraSettings.yaw = 180;
                } else if (fromFace === 'back') {
                    cameraSettings.yaw = 0;
                }
            }

            applyCameraSettings(cameraSettings);
            controls.object.position.copy(camera.position);
            controls.update();
        } else {
            camera.position.set(0, 0, 0.1);
            controls.target.set(0, 0, 0);
            controls.update();
        }

        if (navButton) {
            navButton.style.display = sceneId === 'scene1' ? 'none' : 'block';
        }

        if (currentVideoElements) {
            currentVideoElements.forEach(video => {
                if (video && video.play) {
                    video.play().catch(e => {/* console.log removed */});
                }
            });
        }

        if (sceneId === 'scene4' && pendingVideoState && (pendingVideoState === 'video1' || pendingVideoState === 'video2')) {
            const videoToLoad = pendingVideoState;
            const videoPath = videoToLoad === 'video1' ? '../video/front4_1.webm' : '../video/front4_2.webm';

            setTimeout(async () => {
                try {
                    if (scene4DoorState !== videoToLoad) {
                        return;
                    }

                    const videoElement = document.createElement('video');
                    videoElement.src = videoPath;
                    videoElement.loop = true;
                    videoElement.muted = true;
                    videoElement.autoplay = true;
                    videoElement.crossOrigin = 'anonymous';

                    await new Promise((resolve, reject) => {
                        const timeout = setTimeout(() => reject(new Error('Timeout')), 5000);
                        videoElement.addEventListener('canplay', () => {
                            clearTimeout(timeout);
                            resolve();
                        });
                        videoElement.addEventListener('error', () => {
                            clearTimeout(timeout);
                            reject();
                        });
                        videoElement.load();
                    });

                    const videoTexture = new MOY.VideoTexture(videoElement);
                    videoTexture.minFilter = MOY.LinearFilter;
                    videoTexture.magFilter = MOY.LinearFilter;

                    const frontMaterial = currentCubeMaterials[4];
                    if (frontMaterial) {
                        const oldTexture = frontMaterial.map;
                        frontMaterial.map = videoTexture;
                        frontMaterial.needsUpdate = true;

                        if (oldTexture && oldTexture.dispose && !oldTexture.isVideoTexture) {
                            oldTexture.dispose();
                        }

                        if (!currentVideoElements) currentVideoElements = [];
                        if (currentVideoElements[4] && currentVideoElements[4].pause) {
                            currentVideoElements[4].pause();
                        }
                        currentVideoElements[4] = videoElement;

                        videoElement.play().catch(e => {/* console.log removed */});
                    }
                } catch (error) {
                    console.error('Ошибка загрузки видео:', error);
                }
            }, 100);
        }

    } catch (error) {
        console.error('Ошибка перехода на сцену:', error);
    } finally {
        isTransitioning = false;
    }
}

async function switchToSceneWithCustomCamera(sceneId, customCameraSettings, fromFace = null, fromSceneId = null) {
    if (isTransitioning) return;
    if (!scenes[sceneId]) {
        console.error(`Сцена ${sceneId} не найдена`);
        return;
    }
    const leavingSceneId = currentSceneId;
    let leavingSceneAction = null;

    if (leavingSceneId === 'scene5') {
        if (window.lastScene5Action) {
            leavingSceneAction = window.lastScene5Action;
        }

        if (scene5TextureStatePersistent) {
            scene5TextureState = scene5TextureStatePersistent;
        } else {
            if (currentCustomTextures && currentCustomTextures['front']) {
                const frontTexture = currentCustomTextures['front'];
                if (frontTexture.path === '../video/front5_1.webm') {
                    scene5TextureState = 'video1';
                } else if (frontTexture.path === '../video/front5_2.webm') {
                    scene5TextureState = 'video2';
                } else if (frontTexture.path === '../images/front5.webp') {
                    scene5TextureState = 'closed';
                } else {
                    scene5TextureState = null;
                }
            } else {
                scene5TextureState = null;
            }
        }
    }

    if (leavingSceneId === 'scene9') {
        const savedScene9State = saveScene9State();
        if (savedScene9State) {
            window.lastScene9State = savedScene9State;
        }
    }

    if (leavingSceneId === 'scene11') {
    }

    if (leavingSceneId === 'scene12') {
    }

    if (sceneId === 'scene4' && leavingSceneId === 'scene5') {
    }

    hideCenterTooltip();
    isTransitioning = true;
    stopAllVideos();
    currentCustomTextures = null;

    try {
        const targetScene = scenes[sceneId];

        let texturesToLoad = targetScene.cubeMap.map(item => ({
            type: item.type,
            path: navigationVisible ? item.path : (item.maskPath || item.path),
            name: item.name
        }));

        let pendingVideoState = null;

        if (sceneId === 'scene4') {
            pendingVideoState = scene4DoorState;

            const frontIndex = texturesToLoad.findIndex(item => item.name === 'front');
            if (frontIndex !== -1) {
                texturesToLoad[frontIndex] = {
                    type: 'image',
                    path: '../images/front4.webp',
                    name: 'front',
                    maskPath: '../images/front4_mask.webp'
                };
            }
        }

        if (sceneId === 'scene5' && scene5TextureState) {

            const frontIndex = texturesToLoad.findIndex(item => item.name === 'front');

            if (frontIndex !== -1) {
                if (scene5TextureState === 'video1') {
                    texturesToLoad[frontIndex] = {
                        type: 'video',
                        path: '../video/front5_1.webm',
                        name: 'front',
                        maskPath: '../video/front5_1_mask.webm'
                    };
                } else if (scene5TextureState === 'video2') {
                    texturesToLoad[frontIndex] = {
                        type: 'video',
                        path: '../video/front5_2.webm',
                        name: 'front',
                        maskPath: '../video/front5_2_mask.webm'
                    };
                } else if (scene5TextureState === 'closed') {
                    texturesToLoad[frontIndex] = {
                        type: 'image',
                        path: '../images/front5.webp',
                        name: 'front',
                        maskPath: '../images/front5_mask.webp'
                    };
                }
            }
        }

        let savedScene9State = null;
        if (sceneId === 'scene9') {
            if (window.lastScene9State) {
                savedScene9State = window.lastScene9State;
                scene9DoorOpen = savedScene9State.doorOpen;
            } else {
                scene9DoorOpen = false;
            }

            const frontIndex = texturesToLoad.findIndex(item => item.name === 'front');
            const rightIndex = texturesToLoad.findIndex(item => item.name === 'right');
            const downIndex = texturesToLoad.findIndex(item => item.name === 'down');

            if (scene9DoorOpen) {
                if (frontIndex !== -1) {
                    texturesToLoad[frontIndex] = {
                        type: 'image',
                        path: navigationVisible ? '../images/front9_2.webp' : '../images/front9_2_mask.webp',
                        name: 'front',
                        maskPath: '../images/front9_2_mask.webp'
                    };
                }
                if (rightIndex !== -1) {
                    texturesToLoad[rightIndex] = {
                        type: 'image',
                        path: navigationVisible ? '../images/right9_2.webp' : '../images/right9_2_mask.webp',
                        name: 'right',
                        maskPath: '../images/right9_2_mask.webp'
                    };
                }
                if (downIndex !== -1) {
                    texturesToLoad[downIndex] = {
                        type: 'image',
                        path: '../images/down9_2.webp',
                        name: 'down',
                        maskPath: null
                    };
                }
            } else {
                if (frontIndex !== -1) {
                    texturesToLoad[frontIndex] = {
                        type: 'image',
                        path: navigationVisible ? '../images/front9.webp' : '../images/front9_mask.webp',
                        name: 'front',
                        maskPath: '../images/front9_mask.webp'
                    };
                }
                if (rightIndex !== -1) {
                    texturesToLoad[rightIndex] = {
                        type: 'image',
                        path: navigationVisible ? '../images/right9.webp' : '../images/right9_mask.webp',
                        name: 'right',
                        maskPath: '../images/right9_mask.webp'
                    };
                }
            }
        }

        const { materials, videos } = await loadCubeFacesWithPaths(texturesToLoad);

        if (videos && videos.length > 0) {
            await Promise.all(videos.map(video => {
                if (!video) return Promise.resolve();
                if (video.readyState >= 2) return Promise.resolve();
                return new Promise(resolve => {
                    video.addEventListener('loadeddata', () => resolve(), { once: true });
                    if (video.readyState >= 2) resolve();
                });
            }));
        }

        const newCube = createCube(materials);
        scene.add(newCube);

        if (currentCube) {
            scene.remove(currentCube);
            if (currentCubeMaterials && Array.isArray(currentCubeMaterials)) {
                currentCubeMaterials.forEach(mat => {
                    if (mat.map && !mat.map.isVideoTexture) {
                        mat.map.dispose();
                    }
                    mat.dispose();
                });
            }
        }

        removeAllHotspots();

        currentCube = newCube;
        currentCubeMaterials = materials;
        currentVideoElements = videos || [];
        currentScene = targetScene;
        currentSceneId = sceneId;

        createAllHotspots(targetScene.hotspots, 1000);

        if (sceneId === 'scene5') {
            setupScene5HotspotsState();
        }

        if (sceneId === 'scene5') {
            if (leavingSceneAction) {
                restoreScene5StateFromAction(leavingSceneAction);
            } else if (scene5TextureState) {
                restoreScene5StateFromTexture(scene5TextureState);
            }
        }

        if (sceneId === 'scene9' && savedScene9State) {
            await restoreScene9State(savedScene9State);
        } else if (sceneId === 'scene9') {
            setupScene9HotspotsState();
        }

        if (customCameraSettings) {
            applyCameraSettings(customCameraSettings);
            controls.object.position.copy(camera.position);
            controls.update();
        } else if (targetScene.cameraSettings) {
            let cameraSettings = { ...targetScene.cameraSettings };

            if (sceneId === 'scene4') {
                const fromScene = fromSceneId || leavingSceneId;
                if (fromScene === 'scene3') {
                    cameraSettings.yaw = 180;
                } else if (fromScene === 'scene5' || fromScene === 'scene7') {
                    cameraSettings.yaw = 0;
                } else if (fromFace === 'front') {
                    cameraSettings.yaw = 180;
                } else if (fromFace === 'back') {
                    cameraSettings.yaw = 0;
                }
            }

            applyCameraSettings(cameraSettings);
            controls.object.position.copy(camera.position);
            controls.update();
        } else {
            camera.position.set(0, 0, 0.1);
            controls.target.set(0, 0, 0);
            controls.update();
        }

        if (navButton) {
            navButton.style.display = sceneId === 'scene1' ? 'none' : 'block';
        }

        if (currentVideoElements) {
            currentVideoElements.forEach(video => {
                if (video && video.play) {
                    video.play().catch(e => {/* console.log removed */});
                }
            });
        }

    } catch (error) {
        console.error('Ошибка перехода на сцену:', error);
    } finally {
        isTransitioning = false;
    }
}

function setupScene5HotspotsState() {
    let hotspot5_1 = null;
    let hotspot5_2 = null;
    let hotspot5_scene5 = null;
    let hotspot5_scene6 = null;
    hotspotsObjects.forEach(hotspot => {
        const id = hotspot.userData.hotspotData.id;
        if (id === 'hotspot5_to_video_5_1') {
            hotspot5_1 = hotspot;
        } else if (id === 'hotspot5_to_video_5_2') {
            hotspot5_2 = hotspot;
        } else if (id === 'hotspot5_to_scene5') {
            hotspot5_scene5 = hotspot;
        } else if (id === 'hotspot5_to_scene6') {
            hotspot5_scene6 = hotspot;
        }
    });

    if (hotspot5_1) {
        hotspot5_1.userData.disabled = false;
        hotspot5_1.userData.isActive = true;
    }

    if (hotspot5_2) {
        hotspot5_2.userData.disabled = true;
        hotspot5_2.userData.isActive = false;
    }

    if (hotspot5_scene5) {
        hotspot5_scene5.userData.disabled = true;
        hotspot5_scene5.userData.isActive = false;
    }

    if (hotspot5_scene6) {
        hotspot5_scene6.userData.disabled = true;
        hotspot5_scene6.userData.isActive = false;
    }

    window.scene5Hotspots = {
        hotspot5_1,
        hotspot5_2,
        hotspot5_scene5,
        hotspot5_scene6
    };
}

function setupScene9HotspotsState() {
    let doorHotspot = null;
    let scene10Hotspot = null;
    hotspotsObjects.forEach(hotspot => {
        const id = hotspot.userData.hotspotData.id;
        if (id === 'hotspot9_to_scene9') {
            doorHotspot = hotspot;
        } else if (id === 'hotspot9_to_scene10') {
            scene10Hotspot = hotspot;
        }
    });

    if (doorHotspot) {
        doorHotspot.userData.hotspotData.title = scene9DoorOpen ? 'Закрыть дверь' : 'Открыть дверь';
        doorHotspot.userData.title = scene9DoorOpen ? 'Закрыть дверь' : 'Открыть дверь';
        doorHotspot.userData.disabled = false;
        doorHotspot.userData.isActive = true;
        doorHotspot.visible = true;
    }

    if (scene10Hotspot) {
        const isVisible = scene9DoorOpen && navigationVisible;
        scene10Hotspot.userData.disabled = !isVisible;
        scene10Hotspot.userData.isActive = isVisible;
        scene10Hotspot.visible = isVisible;
    }

    window.scene9Hotspots = {
        doorHotspot,
        scene10Hotspot
    };
}

function restoreScene5StateFromAction(action) {
    if (!window.scene5Hotspots) return;
    const { hotspot5_1, hotspot5_2, hotspot5_scene5, hotspot5_scene6 } = window.scene5Hotspots;

    switch (action) {
        case 'video1':
            if (hotspot5_1) {
                hotspot5_1.userData.disabled = true;
                hotspot5_1.userData.isActive = false;
            }
            if (hotspot5_2) {
                hotspot5_2.userData.disabled = false;
                hotspot5_2.userData.isActive = true;
            }
            if (hotspot5_scene5) {
                hotspot5_scene5.userData.disabled = false;
                hotspot5_scene5.userData.isActive = true;
            }
            if (hotspot5_scene6) {
                hotspot5_scene6.userData.disabled = true;
                hotspot5_scene6.userData.isActive = false;
            }
            scene5TextureStatePersistent = 'video1';
            break;

        case 'video2':
            if (hotspot5_1) {
                hotspot5_1.userData.disabled = false;
                hotspot5_1.userData.isActive = true;
            }
            if (hotspot5_2) {
                hotspot5_2.userData.disabled = true;
                hotspot5_2.userData.isActive = false;
            }
            if (hotspot5_scene5) {
                hotspot5_scene5.userData.disabled = true;
                hotspot5_scene5.userData.isActive = false;
            }
            if (hotspot5_scene6) {
                hotspot5_scene6.userData.disabled = false;
                hotspot5_scene6.userData.isActive = true;
            }
            scene5TextureStatePersistent = 'video2';
            break;

        case 'closed':
            if (hotspot5_1) {
                hotspot5_1.userData.disabled = false;
                hotspot5_1.userData.isActive = true;
            }
            if (hotspot5_2) {
                hotspot5_2.userData.disabled = true;
                hotspot5_2.userData.isActive = false;
            }
            if (hotspot5_scene5) {
                hotspot5_scene5.userData.disabled = true;
                hotspot5_scene5.userData.isActive = false;
            }
            if (hotspot5_scene6) {
                hotspot5_scene6.userData.disabled = true;
                hotspot5_scene6.userData.isActive = false;
            }
            break;

        default:
            scene5TextureStatePersistent = 'closed';
            break;
    }
}

function restoreScene5StateFromTexture(textureState) {
    if (!window.scene5Hotspots) return;
    const { hotspot5_1, hotspot5_2, hotspot5_scene5, hotspot5_scene6 } = window.scene5Hotspots;

    switch (textureState) {
        case 'video1':
            if (hotspot5_1) {
                hotspot5_1.userData.disabled = true;
                hotspot5_1.userData.isActive = false;
            }
            if (hotspot5_2) {
                hotspot5_2.userData.disabled = false;
                hotspot5_2.userData.isActive = true;
            }
            if (hotspot5_scene5) {
                hotspot5_scene5.userData.disabled = false;
                hotspot5_scene5.userData.isActive = true;
            }
            if (hotspot5_scene6) {
                hotspot5_scene6.userData.disabled = true;
                hotspot5_scene6.userData.isActive = false;
            }
            window.lastScene5Action = 'video1';
            scene5TextureStatePersistent = 'video1';
            break;

        case 'video2':
            if (hotspot5_1) {
                hotspot5_1.userData.disabled = false;
                hotspot5_1.userData.isActive = true;
            }
            if (hotspot5_2) {
                hotspot5_2.userData.disabled = true;
                hotspot5_2.userData.isActive = false;
            }
            if (hotspot5_scene5) {
                hotspot5_scene5.userData.disabled = true;
                hotspot5_scene5.userData.isActive = false;
            }
            if (hotspot5_scene6) {
                hotspot5_scene6.userData.disabled = false;
                hotspot5_scene6.userData.isActive = true;
            }
            window.lastScene5Action = 'video2';
            scene5TextureStatePersistent = 'video2';
            break;

        case 'closed':
            if (hotspot5_1) {
                hotspot5_1.userData.disabled = false;
                hotspot5_1.userData.isActive = true;
            }
            if (hotspot5_2) {
                hotspot5_2.userData.disabled = true;
                hotspot5_2.userData.isActive = false;
            }
            if (hotspot5_scene5) {
                hotspot5_scene5.userData.disabled = true;
                hotspot5_scene5.userData.isActive = false;
            }
            if (hotspot5_scene6) {
                hotspot5_scene6.userData.disabled = true;
                hotspot5_scene6.userData.isActive = false;
            }
            window.lastScene5Action = 'closed';
            scene5TextureStatePersistent = 'closed';
            break;

        default:
            break;
    }
}

let savedScene5HotspotsState = null;
function saveScene5HotspotsState() {
    if (currentSceneId !== 'scene5') return null;
    const state = {
        scene5TextureState: scene5TextureState,
        lastScene5Action: window.lastScene5Action,
        hotspotStates: {}
    };

    hotspotsObjects.forEach(hotspot => {
        const id = hotspot.userData.hotspotData.id;
        if (id && (id === 'hotspot5_to_video_5_1' || id === 'hotspot5_to_video_5_2' ||
            id === 'hotspot5_to_scene5' || id === 'hotspot5_to_scene6' ||
            id === 'hotspot5_to_scene4' || id === 'hotspot5_to_scene7')) {
            state.hotspotStates[id] = {
                disabled: hotspot.userData.disabled,
                isActive: hotspot.userData.isActive
            };
        }
    });
    return state;
}

function restoreScene5HotspotsState(savedState) {
    if (!savedState || currentSceneId !== 'scene5') return;

    if (savedState.scene5TextureState !== undefined) {
        scene5TextureState = savedState.scene5TextureState;
    }
    if (savedState.lastScene5Action !== undefined) {
        window.lastScene5Action = savedState.lastScene5Action;
    }

    hotspotsObjects.forEach(hotspot => {
        const id = hotspot.userData.hotspotData.id;
        if (id && savedState.hotspotStates && savedState.hotspotStates[id]) {
            hotspot.userData.disabled = savedState.hotspotStates[id].disabled;
            hotspot.userData.isActive = savedState.hotspotStates[id].isActive;
        }
    });

    if (window.scene5Hotspots) {
        for (const [key, hotspot] of Object.entries(window.scene5Hotspots)) {
            if (hotspot && hotspot.userData?.hotspotData?.id && savedState.hotspotStates[hotspot.userData.hotspotData.id]) {
                hotspot.userData.disabled = savedState.hotspotStates[hotspot.userData.hotspotData.id].disabled;
                hotspot.userData.isActive = savedState.hotspotStates[hotspot.userData.hotspotData.id].isActive;
            }
        }
    }
}

async function updateScene9DoorTextures(isOpen) {
    if (currentSceneId !== 'scene9') return;

    const texturesToUpdate = [];

    if (isOpen) {
        texturesToUpdate.push(
            { face: 'front', path: '../images/front9_2.webp', maskPath: '../images/front9_2_mask.webp', type: 'image' },
            { face: 'right', path: '../images/right9_2.webp', maskPath: '../images/right9_2_mask.webp', type: 'image' },
            { face: 'down', path: '../images/down9_2.webp', maskPath: null, type: 'image' }
        );
    } else {
        texturesToUpdate.push(
            { face: 'front', path: '../images/front9.webp', maskPath: '../images/front9_mask.webp', type: 'image' },
            { face: 'right', path: '../images/right9.webp', maskPath: '../images/right9_mask.webp', type: 'image' },
            { face: 'down', path: '../images/down9.webp', maskPath: null, type: 'image' }
        );
    }

    for (const tex of texturesToUpdate) {
        const faceIndex = { 'right': 0, 'left': 1, 'up': 2, 'down': 3, 'front': 4, 'back': 5 }[tex.face];
        if (faceIndex === undefined) continue;

        const texturePath = !navigationVisible && tex.maskPath ? tex.maskPath : tex.path;

        try {
            const textureLoader = new MOY.TextureLoader();
            const newTexture = await new Promise((resolve, reject) => {
                textureLoader.load(texturePath,
                    (texture) => {
                        texture.minFilter = MOY.LinearFilter;
                        texture.magFilter = MOY.LinearFilter;
                        resolve(texture);
                    },
                    undefined,
                    (error) => reject(error)
                );
            });

            if (currentCubeMaterials && currentCubeMaterials[faceIndex]) {
                const targetMaterial = currentCubeMaterials[faceIndex];
                const oldTexture = targetMaterial.map;

                targetMaterial.map = newTexture;
                targetMaterial.needsUpdate = true;

                if (oldTexture && oldTexture.dispose && !oldTexture.isVideoTexture) {
                    oldTexture.dispose();
                }
            }

            if (!currentCustomTextures) currentCustomTextures = {};
            currentCustomTextures[tex.face] = {
                ...tex,
                currentPath: texturePath,
                useMask: !navigationVisible && tex.maskPath
            };

        } catch (error) {
            console.error(`Ошибка загрузки текстуры для грани ${tex.face}:`, error);
        }
    }
}

function updateScene10HotspotVisibility(isOpen) {
    if (currentSceneId !== 'scene9') return;
    const scene10Hotspot = window.scene9Hotspots?.scene10Hotspot;

    if (scene10Hotspot) {
        const isVisible = isOpen && navigationVisible;

        scene10Hotspot.userData.disabled = !isVisible;
        scene10Hotspot.userData.isActive = isVisible;
        scene10Hotspot.visible = isVisible;
    }
}

async function handleScene9DoorClick() {
    if (isTransitioning) return;
    scene9DoorOpen = !scene9DoorOpen;

    const doorHotspot = window.scene9Hotspots?.doorHotspot;
    if (doorHotspot) {
        const newTitle = scene9DoorOpen ? 'Закрыть дверь' : 'Открыть дверь';
        doorHotspot.userData.hotspotData.title = newTitle;
        doorHotspot.userData.title = newTitle;
    }

    await updateScene9DoorTextures(scene9DoorOpen);

    if (window.scene9Hotspots?.scene10Hotspot) {
        const isVisible = scene9DoorOpen && navigationVisible;
        const scene10Hotspot = window.scene9Hotspots.scene10Hotspot;
        scene10Hotspot.userData.disabled = !isVisible;
        scene10Hotspot.userData.isActive = isVisible;
        scene10Hotspot.visible = isVisible;
    }
}

function saveScene9State() {
    if (currentSceneId !== 'scene9') return null;
    return {
        doorOpen: scene9DoorOpen
    };
}

async function restoreScene9State(savedState) {
    if (!savedState || currentSceneId !== 'scene9') return;
    scene9DoorOpen = savedState.doorOpen;

    await updateScene9DoorTextures(scene9DoorOpen);

    updateScene10HotspotVisibility(scene9DoorOpen);

    const doorHotspot = window.scene9Hotspots?.doorHotspot;
    if (doorHotspot) {
        const newTitle = scene9DoorOpen ? 'Закрыть дверь' : 'Открыть дверь';
        doorHotspot.userData.hotspotData.title = newTitle;
        doorHotspot.userData.title = newTitle;
    }
}

function showCustomNotification(message, onConfirm, onCancel) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); z-index: 10000; display: flex; justify-content: center; align-items: center; font-family: 'PT Serif', 'Playfair Display', 'Times New Roman', serif;`;
    const notificationBox = document.createElement('div');
    notificationBox.style.cssText = `
    background: url('../images/infotext.webp') no-repeat center center;
    background-size : 600px;
    width: 600px;
    height: 600px;
    text-align: center;
    animation: fadeIn 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
     align-items: center;
	font-family: 'PT Serif', 'Playfair Display', 'Times New Roman', serif;
`;

    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageText.style.cssText = `
    font-size: 36px;
    margin-bottom: 24px;
	white-space: pre-line;
    color: #76432d;
	font-family: 'PT Serif', 'Playfair Display', 'Times New Roman', serif;
`;

    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
    display: flex;
    gap: 12px;
    justify-content: center;
`;

    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'Хорошо';
    confirmBtn.style.cssText = `
    padding: 10px 20px;
    background-color: #bd6f4d;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 24px;
    transition: background-color 0.2s;
	font-family: 'PT Serif', 'Playfair Display', 'Times New Roman', serif;
`;
    confirmBtn.onmouseenter = () => confirmBtn.style.backgroundColor = '#9c583b';
    confirmBtn.onmouseleave = () => confirmBtn.style.backgroundColor = '#bd6f4d';

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Не гасить огонь';
    cancelBtn.style.cssText = `
    padding: 10px 20px;
    background-color: #bd6f4d;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 24px;
    transition: background-color 0.2s;
	font-family: 'PT Serif', 'Playfair Display', 'Times New Roman', serif;
`;
    cancelBtn.onmouseenter = () => cancelBtn.style.backgroundColor = '#f53325';
    cancelBtn.onmouseleave = () => cancelBtn.style.backgroundColor = '#bd6f4d';

    buttonContainer.appendChild(confirmBtn);
    buttonContainer.appendChild(cancelBtn);
    notificationBox.appendChild(messageText);
    notificationBox.appendChild(buttonContainer);
    overlay.appendChild(notificationBox);

    const style = document.createElement('style');
    style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
    }
`;
    document.head.appendChild(style);

    document.body.appendChild(overlay);

    confirmBtn.onclick = () => {
        document.body.removeChild(overlay);
        if (onConfirm) onConfirm();
    };

    cancelBtn.onclick = () => {
        document.body.removeChild(overlay);
        if (onCancel) onCancel();
    };

    overlay.onclick = (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
            if (onCancel) onCancel();
        }
    };
}

window.openBook = function(pagesSrc) { 
    if (bookContainer) {
        closeBook();
        setTimeout(() => openNewBookInstance(pagesSrc), 350);
        return;
    }
    openNewBookInstance(pagesSrc);
};

function openNewBookInstance(pagesSrc) {
    if (bookContainer) return;

    const BOOK_WIDTH_PX = 800; 
    const EXTRA_SPACE_PX = 300; 

    bookContainer = document.createElement('div'); 
    bookContainer.id = 'book-overlay';
    bookContainer.style.cssText = `
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: transparent;
        z-index: 5000;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        overflow: visible; 
        pointer-events: auto;
    `;
    bookContainer.oncontextmenu = (e) => { e.preventDefault(); return false; };

    const bookDiv = document.createElement('div');
    bookDiv.id = 'book-canvas-container';
    const contentHeight = BOOK_WIDTH_PX / 1.3333;
    const totalHeight = contentHeight + (EXTRA_SPACE_PX * 2);

    bookDiv.style.cssText = `
        position: relative;
        width: ${BOOK_WIDTH_PX}px;
        height: ${totalHeight}px;
        padding: ${EXTRA_SPACE_PX}px 0;
        box-sizing: border-box;
        background: transparent;
        pointer-events: auto;
        z-index: 5001;
        overflow: visible;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    bookDiv.oncontextmenu = (e) => { e.preventDefault(); return false; };

    const bgLeft = document.createElement('div');
    bgLeft.style.cssText = `
        position: absolute;
        left: -119px;
        top: 216px;
        width: 300px;
        height: 767px;
        background-image: url('../images/fon_book_L.webp');
        background-size: contain;
        background-position: left center;
        background-repeat: no-repeat;
        z-index: 0;
        pointer-events: none;
    `;

    const bgRight = document.createElement('div');
    bgRight.style.cssText = `
    position: absolute;
    right: -95px;
    top: 216px;
    width: 300px;
    height: 768px;
    background-image: url(../images/fon_book_R.webp);
    background-size: contain;
    background-position: right center;
    background-repeat: no-repeat;
    z-index: -1;
    pointer-events: none;
    `;

    bookDiv.appendChild(bgLeft);
    bookDiv.appendChild(bgRight);

    function createProtectiveLayer(position) {
        const layer = document.createElement('div');
        layer.style.cssText = `
            position: absolute; left: 0; width: 100%; height: 18.8%;
            background: transparent; z-index: 5002; pointer-events: auto;
        `;
        if (position === 'top') layer.style.top = '0';
        else layer.style.bottom = '0';
        layer.oncontextmenu = (e) => { e.preventDefault(); return false; };
        return layer;
    }
    const topLayer = createProtectiveLayer('top');
    const bottomLayer = createProtectiveLayer('bottom');
    bookDiv.appendChild(topLayer);
    bookDiv.appendChild(bottomLayer);	  

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: fixed; top: 20px; right: 60px;
        font-size: 80px; color: white; background: none; border: none;
        cursor: pointer; z-index: 5003; text-shadow: 0 0 5px black;
        pointer-events: auto;
    `;
    closeBtn.oncontextmenu = (e) => { e.preventDefault(); return false; };	
    closeBtn.onclick = (e) => { e.stopPropagation(); closeBook(); };

    bookContainer.appendChild(closeBtn);
    bookContainer.appendChild(bookDiv); 
    document.body.appendChild(bookContainer);

    setTimeout(() => {
        try {
            const pageWidth = BOOK_WIDTH_PX / 2; 
            const pageHeight = contentHeight; 

            bookFlipInstance = new PageFlip(bookDiv, {
                width: pageWidth,
                height: pageHeight,
                size: 'stretch',
                minWidth: 200, maxWidth: 500,
                minHeight: 300, maxHeight: 800,
                showCover: false,
                usePortrait: false,
                maxShadowOpacity: 0.5,
                mobileScrollSupport: false,
                flippingTime: 800,
                drawShadow: true,
                useMouseEvents: true,
                startPage: 0,
                swipeDistance: 30,
                clickEventForward: false
            });

            bookFlipInstance.loadFromImages(pagesSrc);
            
            bookFlipInstance.on('init', () => {
                bookContainer.style.opacity = '1';
                setTimeout(() => { if (bookFlipInstance) bookFlipInstance.update(); }, 100);
            });

        } catch (e) {
            console.error("Ошибка книги (Canvas): ", e);
        }
    }, 50);
}

const booksConfig = {
    book1: [
        '../images/book1/page1.webp',
        '../images/book1/page2.webp',
        '../images/book1/page3.webp',
        '../images/book1/page4.webp'
    ],
    book2: [
        '../images/book2/page1.webp',
        '../images/book2/page2.webp',
        '../images/book2/page3.webp',
        '../images/book2/page4.webp',
        '../images/book2/page5.webp',
        '../images/book2/page6.webp',
        '../images/book2/page7.webp',
        '../images/book2/page8.webp',
        '../images/book2/page9.webp',
        '../images/book2/page10.webp',
        '../images/book2/page11.webp',
        '../images/book2/page12.webp',
        '../images/book2/page13.webp',
        '../images/book2/page14.webp',
        '../images/book2/page15.webp',
        '../images/book2/page16.webp'
    ],
};

function closeBook() {
    if (!bookContainer) return;
    
    if (bookFlipInstance) {
        bookFlipInstance.destroy();
        bookFlipInstance = null;
    }

    bookContainer.style.opacity = '0';
    setTimeout(() => {
        if (bookContainer) {
            if (bookContainer.parentNode) {
                document.body.removeChild(bookContainer);
            }
            bookContainer = null;
        }
    }, 300);
}

let imageOverlay = null;

function showImagePopupFromHotspot(imageUrl, title, hotspotScreenX, hotspotScreenY) {
    if (imageOverlay) {
        closeImagePopup();
    }
    const startX = (hotspotScreenX !== undefined) ? hotspotScreenX : window.innerWidth / 2;
    const startY = (hotspotScreenY !== undefined) ? hotspotScreenY : window.innerHeight / 2;

    imageOverlay = document.createElement('div');
    imageOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background 0.4s ease;
    `;

    document.body.appendChild(imageOverlay);

    const centerWrapper = document.createElement('div');
    centerWrapper.style.cssText = `
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transform: scale(0);
        transition: all 0.4s cubic-bezier(0.34, 1.2, 0.64, 1);
        will-change: transform, opacity;
    `;

    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = `
        position: relative;
        background: #fff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 0 40px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        max-width: 85vw;
        max-height: 85vh;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';

    closeBtn.style.cssText = `
        position: fixed; 
        top: -20px;
        right: -50px;
        width: 40px;
        height: 40px;
        background: rgba(87,87,87,0.3);
        border-radius: 25%;
        color: white;
        font-size: 28px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 20; 
        transition: all 0.2s;
        padding: 0;
        line-height: 1;
    `;

    const mobileStyle = document.createElement('style');
    mobileStyle.innerHTML = `
        @media (max-width: 768px) {
            .popup-close-btn-mobile {
                top: -50px !important;
                right: 10px !important;
                background: rgba(0,0,0,0.7) !important;
                width: 36px !important;
                height: 36px !important;
                font-size: 24px !important;
            }
        }
    `;
    document.head.appendChild(mobileStyle);
    closeBtn.classList.add('popup-close-btn-mobile');

    closeBtn.onmouseenter = () => closeBtn.style.background = 'rgba(0,0,0,0.9)';
    closeBtn.onmouseleave = () => closeBtn.style.background = 'rgba(0,0,0,0.5)';
    
    closeBtn.onclick = (e) => {
        e.stopPropagation();
        closeImagePopup(startX, startY);
    };

    const imgWrapper = document.createElement('div');
    imgWrapper.style.cssText = `
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
    `;

    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.cssText = `
        display: block;
        max-width: 85vw;
        max-height: 75vh;
        width: auto;
        height: auto;
        object-fit: contain;
    `;

    const spinner = document.createElement('div');
    spinner.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 48px;
        height: 48px;
        border: 4px solid rgba(0,0,0,0.2);
        border-top: 4px solid #333;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        z-index: 5;
        pointer-events: none;
    `;

    let titleDiv = null;
    if (title) {
        titleDiv = document.createElement('div');
        titleDiv.textContent = title;
        titleDiv.style.cssText = `
            padding: 12px 20px;
            background: #fff;
            color: #333;
            text-align: center;
            font-family: 'PT Serif', serif;
            font-size: 18px;
            font-weight: 500;
            border-top: 1px solid #eee;
        `;
    }

    imgWrapper.appendChild(spinner);
    imgWrapper.appendChild(img);
    
    imageContainer.appendChild(imgWrapper);
    imageContainer.appendChild(closeBtn); 
    
    if (titleDiv) imageContainer.appendChild(titleDiv); 
    
    centerWrapper.appendChild(imageContainer);
    imageOverlay.appendChild(centerWrapper);

    requestAnimationFrame(() => {
        imageOverlay.style.background = 'rgba(0, 0, 0, 0.5)';
        centerWrapper.style.opacity = '1';
        centerWrapper.style.transform = 'scale(1)';
    });

    img.onload = () => {
        spinner.style.opacity = '0';
        setTimeout(() => {
            if (spinner.parentNode) spinner.style.display = 'none';
        }, 300);
    };

    img.onerror = () => {
        if (spinner.parentNode) spinner.remove();
        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="2"%3E%3Crect x="2" y="2" width="20" height="20" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="2.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
        img.style.opacity = '0.7';
        spinner.style.display = 'none';
    };

    if (!document.querySelector('#popup-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'popup-animation-styles';
        style.textContent = `
            @keyframes spin {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

function closeImagePopup(startX, startY) {
    if (!imageOverlay) return;
    
    const centerWrapper = imageOverlay.querySelector('div:first-child');
    if (centerWrapper) {
        centerWrapper.style.transform = 'scale(0)';
        centerWrapper.style.opacity = '0';
    }
    
    imageOverlay.style.background = 'rgba(0, 0, 0, 0)';
    
    setTimeout(() => {
        if (imageOverlay && imageOverlay.parentNode) {
            imageOverlay.parentNode.removeChild(imageOverlay);
        }
        imageOverlay = null;
    }, 400);
}

let vkVideoOverlay = null;
let currentVKVideoElement = null;

function showVKVideo(videoId, options = {}) {
    if (vkVideoOverlay) {
        closeVKVideo();
    }

    vkVideoOverlay = document.createElement('div');
    vkVideoOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        animation: fadeIn 0.3s ease;
    `;

    const videoContainer = document.createElement('div');
    videoContainer.style.cssText = `
        position: relative;
        max-width: 90vw;
        background: #000;
        border-radius: 8px;
        overflow: hidden;
        cursor: default;
    `;

    const spinner = document.createElement('div');
    spinner.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 48px;
        height: 48px;
        border: 4px solid rgba(255,255,255,0.3);
        border-top: 4px solid #0077FF;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        z-index: 4;
        pointer-events: none;
    `;
	
	videoContainer.appendChild(spinner);

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: fixed;
        top: 40px;
        right: 40px;
        width: 60px;
        height: 60px;
        background: rgba(255,255,255,0.2);
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
		z-index: 10001;
        transition: all 0.2s;
    `;
    closeBtn.onmouseenter = () => closeBtn.style.background = 'rgba(255,255,255,0.3)';
    closeBtn.onmouseleave = () => closeBtn.style.background = 'rgba(255,255,255,0.2)';
    closeBtn.onclick = (e) => {
        e.stopPropagation();
        closeVKVideo();
    };

    const iframe = document.createElement('iframe');
    const autoplay = options.autoplay ? '&autoplay=1' : '';
    iframe.src = `https://vk.ru/video_ext.php?oid=-${videoId.split('_')[0].substring(1)}&id=${videoId.split('_')[1]}&hash=${options.hash || ''}&hd=1${autoplay}`;
    iframe.width = options.width || 853;
    iframe.height = options.height || 480;
    iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;";
    iframe.allowFullscreen = true;
    iframe.style.cssText = `
        display: block;
        width: 100%;
        aspect-ratio: 16/9;
        border: none;
    `;

    iframe.onload = () => {
        setTimeout(() => {
            iframe.style.opacity = '1';
            spinner.style.display = 'none';
        }, 500);
    };

    setTimeout(() => {
        if (iframe.style.opacity === '0') {
            iframe.style.opacity = '1';
            spinner.style.display = 'none';
        }
    }, 5000);	
    
    videoContainer.appendChild(closeBtn);
    videoContainer.appendChild(iframe);
    vkVideoOverlay.appendChild(videoContainer);
    
    document.body.appendChild(vkVideoOverlay);
    currentVKVideoElement = iframe;

    const style = document.createElement('style');
    if (!document.querySelector('#vk-video-styles')) {
	    style.id = 'vk-spinner-styles';
        style.id = 'vk-video-styles';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes spin {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
            }			
        `;
        document.head.appendChild(style);
    }
}

function closeVKVideo() {
    if (vkVideoOverlay) {
        vkVideoOverlay.style.opacity = '0';
        setTimeout(() => {
            if (vkVideoOverlay && vkVideoOverlay.parentNode) {
                vkVideoOverlay.parentNode.removeChild(vkVideoOverlay);
            }
            vkVideoOverlay = null;
            currentVKVideoElement = null;
        }, 300);
    }
}

async function handleHotspotClick(hotspotData) {
    if (isTransitioning) return;
    hideCenterTooltip();

    if (hotspotData.targetType === 'url' && hotspotData.url) {
        window.open(hotspotData.url, '_blank', 'noopener,noreferrer');
        return;
    }

if (hotspotData.targetType === 'book' || hotspotData.action === 'showBook') {
    const bookId = hotspotData.bookId || 'book1'; 
    
    if (booksConfig[bookId]) {
        openBook(booksConfig[bookId]);
    } else {
        console.warn(`Книга с ID "${bookId}" не найдена в конфигурации booksConfig`);
    }
    return;
}

if (hotspotData.targetType === 'imagepopup') {
    const imageUrl = hotspotData.imageUrl;
    const title = hotspotData.imageTitle || '';
    if (imageUrl) {
        showImagePopupFromHotspot(imageUrl, title, window._lastClickX, window._lastClickY);
    }
    return;
}

    if (hotspotData.targetType === 'vkvideoplayer') {
        if (currentScene && currentScene.vkVideo && currentScene.vkVideo.enabled) {
            showVKVideo(
                currentScene.vkVideo.videoId,
                {
                    width: currentScene.vkVideo.width,
                    height: currentScene.vkVideo.height,
                    autoplay: currentScene.vkVideo.autoplay
                }
            );
        }
        return;
    }

    if (currentSceneId === 'scene5') {
        const id = hotspotData.id;

        if (id === 'hotspot5_to_video_5_1') {
            window.lastScene5Action = 'video1';
            scene4DoorState = 'video1';
            scene5TextureStatePersistent = 'video1';
            scene5TextureState = 'video1';

            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_1) {
                const hotspot = window.scene5Hotspots.hotspot5_1;
                hotspot.userData.hotspotData.title = 'Закрыть топочную дверцу';
                hotspot.userData.title = 'Закрыть топочную дверцу';
            }

            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_scene6) {
                window.scene5Hotspots.hotspot5_scene6.userData.disabled = true;
                window.scene5Hotspots.hotspot5_scene6.userData.isActive = false;
            }

            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_1) {
                window.scene5Hotspots.hotspot5_1.userData.disabled = true;
                window.scene5Hotspots.hotspot5_1.userData.isActive = false;
            }
            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_2) {
                window.scene5Hotspots.hotspot5_2.userData.disabled = false;
                window.scene5Hotspots.hotspot5_2.userData.isActive = true;
            }
            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_scene5) {
                window.scene5Hotspots.hotspot5_scene5.userData.disabled = false;
                window.scene5Hotspots.hotspot5_scene5.userData.isActive = true;
            }

            if (hotspotData.targetType === 'video' && hotspotData.targetCubeMap) {
                for (const targetFace of hotspotData.targetCubeMap) {
                    const useMask = !navigationVisible;
                    await replaceTextureOnFace(targetFace.name, targetFace, currentCubeMaterials, useMask);
                }
            }
            return;
        }

        if (id === 'hotspot5_to_video_5_2') {
            window.lastScene5Action = 'video2';
            scene4DoorState = 'video2';
            scene5TextureStatePersistent = 'video2';
            scene5TextureState = 'video2';

            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_2) {
                window.scene5Hotspots.hotspot5_2.userData.disabled = true;
                window.scene5Hotspots.hotspot5_2.userData.isActive = false;
            }
            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_scene5) {
                window.scene5Hotspots.hotspot5_scene5.userData.disabled = true;
                window.scene5Hotspots.hotspot5_scene5.userData.isActive = false;
            }
            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_1) {
                window.scene5Hotspots.hotspot5_1.userData.disabled = false;
                window.scene5Hotspots.hotspot5_1.userData.isActive = true;
            }
            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_scene6) {
                window.scene5Hotspots.hotspot5_scene6.userData.disabled = false;
                window.scene5Hotspots.hotspot5_scene6.userData.isActive = true;
            }

            if (hotspotData.targetType === 'video' && hotspotData.targetCubeMap) {
                for (const targetFace of hotspotData.targetCubeMap) {
                    const useMask = !navigationVisible;
                    await replaceTextureOnFace(targetFace.name, targetFace, currentCubeMaterials, useMask);
                }
            }
            return;
        }

        if (id === 'hotspot5_to_scene5') {
            window.lastScene5Action = 'closed';
            scene4DoorState = 'default';
            scene5TextureStatePersistent = 'closed';
            scene5TextureState = 'closed';

            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_1) {
                const hotspot = window.scene5Hotspots.hotspot5_1;
                hotspot.userData.hotspotData.title = 'Открыть полу дверку';
                hotspot.userData.title = 'Открыть полу дверку';
            }

            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_2) {
                window.scene5Hotspots.hotspot5_2.userData.disabled = true;
                window.scene5Hotspots.hotspot5_2.userData.isActive = false;
            }
            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_scene5) {
                window.scene5Hotspots.hotspot5_scene5.userData.disabled = true;
                window.scene5Hotspots.hotspot5_scene5.userData.isActive = false;
            }
            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_scene6) {
                window.scene5Hotspots.hotspot5_scene6.userData.disabled = true;
                window.scene5Hotspots.hotspot5_scene6.userData.isActive = false;
            }
            if (window.scene5Hotspots && window.scene5Hotspots.hotspot5_1) {
                window.scene5Hotspots.hotspot5_1.userData.disabled = false;
                window.scene5Hotspots.hotspot5_1.userData.isActive = true;
            }

            const originalFrontTexture = scenes.scene5.cubeMap.find(item => item.name === 'front');
            if (originalFrontTexture) {
                const useMask = !navigationVisible;
                await replaceTextureOnFace('front', originalFrontTexture, currentCubeMaterials, useMask);
            }
            return;
        }

        if (id === 'hotspot5_to_scene6') {
            showCustomNotification(
                "Чтобы залезть в печь,\nнам нужно погасить огонь ",
                () => {
                    switchToScene('scene6', hotspotData.face, currentSceneId);
                },
                () => {
                }
            );
            return;
        }
    }

    if (currentSceneId === 'scene9') {
        const id = hotspotData.id;

        if (id === 'hotspot9_to_scene9') {
            await handleScene9DoorClick();
            return;
        }

        if (id === 'hotspot9_to_scene10') {
            if (scene9DoorOpen) {
                await switchToScene('scene10', hotspotData.face, currentSceneId);
            }
            return;
        }

        if (id === 'hotspot9_to_scene8') {
            const savedScene9State = saveScene9State();
            if (savedScene9State) {
                window.lastScene9State = savedScene9State;
            }

            await switchToSceneWithCustomCamera('scene8', {
                pitch: 23,
                yaw: 1,
                distance: 1
            }, hotspotData.face, currentSceneId);
            return;
        }
    }

    if (currentSceneId === 'scene11') {
        const id = hotspotData.id;

        if (id === 'hotspot11_to_scene9') {
            await switchToSceneWithCustomCamera('scene9', {
                pitch: 25,
                yaw: 4,
                distance: 1
            }, hotspotData.face, currentSceneId);
            return;
        }
    }

    if (currentSceneId === 'scene12') {
        const id = hotspotData.id;

        if (id === 'hotspot12_to_scene11') {

            await switchToSceneWithCustomCamera('scene11', {
                pitch: 15,
                yaw: 1,
                distance: 1
            }, hotspotData.face, currentSceneId);
            return;
        }
    }

    if (hotspotData.targetScene) {
        await switchToScene(hotspotData.targetScene, hotspotData.face, currentSceneId);
        return;
    }

    if (hotspotData.targetType === 'video' && hotspotData.targetCubeMap) {
        for (const targetFace of hotspotData.targetCubeMap) {
            const useMask = !navigationVisible;
            await replaceTextureOnFace(targetFace.name, targetFace, currentCubeMaterials, useMask);
        }
        return;
    }

    if (hotspotData.targetType === 'image' && hotspotData.targetCubeMap) {
        for (const targetFace of hotspotData.targetCubeMap) {
            const useMask = !navigationVisible;
            await replaceTextureOnFace(targetFace.name, targetFace, currentCubeMaterials, useMask);
        }
        return;
    }
}

function applyCameraSettings(settings) {
    if (!settings) return;

    if (settings.pitch !== undefined && settings.yaw !== undefined) {
        const distance = settings.distance || 1;
        const position = convertCameraAnglesToPosition(settings.pitch, settings.yaw, distance);

        camera.position.set(position.x, position.y, position.z);
        controls.target.set(0, 0, 0);
        controls.object.position.copy(camera.position);

        const pitchRad = settings.pitch * Math.PI / 180;
        const yawRad = settings.yaw * Math.PI / 180;

        controls.object.rotation.order = 'YXZ';
        controls.object.rotation.x = pitchRad;
        controls.object.rotation.y = yawRad;
        controls.object.rotation.z = 0;
    }

    controls.update();

    setTimeout(() => {
        controls.update();
        renderer.render(scene, camera);
    }, 100);
}

function convertCameraAnglesToPosition(pitch, yaw, distance = 1) {
    const pitchRad = pitch * Math.PI / 180;
    const yawRad = yaw * Math.PI / 180;
    const x = distance * Math.cos(pitchRad) * Math.sin(yawRad);
    const y = distance * Math.sin(pitchRad);
    const z = distance * Math.cos(pitchRad) * Math.cos(yawRad);

    return { x, y, z };
}

function addLights() {
    const ambientLight = new MOY.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new MOY.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const backLight = new MOY.DirectionalLight(0xffffff, 0.5);
    backLight.position.set(-1, -1, -1);
    scene.add(backLight);
}

let preloaderElement = null;
let totalAssetsToLoad = 0;
let loadedAssetsCount = 0;

function createPreloader() {
    if (preloaderElement) return;
    preloaderElement = document.createElement('div');
    preloaderElement.className = 'custom-preloader';
    preloaderElement.innerHTML = `
     <div class= "preloader-content " >
         <img src= "../images/preloader.gif " alt= "Загрузка... " class= "preloader-gif " >
         <div class= "preloader-text " >Загрузка панорамы... </div >
         <div class= "preloader-progress " >
             <div class= "preloader-progress-bar " > </div >
         </div >
         <div class= "preloader-percent " >0% </div >
     </div >
`;

    const style = document.createElement('style');
    style.textContent = `
    .custom-preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
         height: 100%;
        background: rgb(255, 255, 255);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        tra nsition: opacity 0.5s ease;
    }
    .preloader-content {
        text-align: center;
        color: #333;
    }
    .preloader-gif {
        width: 200px;
        height: 200px;
         margin-bottom: 20px;
    }
    .preloader-text {
        font-size: 18px;
        margin-bottom: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', R oboto, sans-serif;
    }
    .preloader-progress {
        width: 300px;
        height: 6px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        over flow: hidden;
        margin: 0 auto 10px;
    }
    .preloader-progress-bar {
        width: 0%;
        height: 100%;
        background: #4caf50;
        border-radius: 3px;
         transition: width 0.3s ease;
    }
    .preloader-percent {
        font-size: 14px;
        font-family: monospace;
        color: #666;
    }
`;
    document.head.appendChild(style);

    document.body.appendChild(preloaderElement);
}

function updatePreloaderProgress(percent, text) {
    if (!preloaderElement) return;
    const progressBar = preloaderElement.querySelector('.preloader-progress-bar');
    const percentSpan = preloaderElement.querySelector('.preloader-percent');
    const textSpan = preloaderElement.querySelector('.preloader-text');

    if (progressBar) progressBar.style.width = percent + '%';
    if (percentSpan) percentSpan.textContent = Math.floor(percent) + '%';
    if (textSpan && text) textSpan.textContent = text;
}

function hidePreloader() {
    if (!preloaderElement) return;
    preloaderElement.style.opacity = '0';
    setTimeout(() => {
        if (preloaderElement && preloaderElement.parentNode) {
            preloaderElement.parentNode.removeChild(preloaderElement);
            preloaderElement = null;
        }
    }, 500);
}

async function preloadAllVideos() {
    const videoPaths = new Set();
    for (const sceneKey in scenes) {
        const scene = scenes[sceneKey];

        if (scene.cubeMap) {
            scene.cubeMap.forEach(item => {
                if (item.type === 'video') {
                    videoPaths.add(item.path);
                    if (item.maskPath) videoPaths.add(item.maskPath);
                }
            });
        }

        if (scene.hotspots) {
            scene.hotspots.forEach(hotspot => {
                if (hotspot.targetCubeMap) {
                    hotspot.targetCubeMap.forEach(item => {
                        if (item.type === 'video') {
                            videoPaths.add(item.path);
                            if (item.maskPath) videoPaths.add(item.maskPath);
                        }
                    });
                }
            });
        }
    }

    const videoArray = Array.from(videoPaths);
    totalAssetsToLoad = videoArray.length;
    loadedAssetsCount = 0;

    if (totalAssetsToLoad === 0) {
        updatePreloaderProgress(100, 'Готово!');
        return;
    }

    updatePreloaderProgress(0, `Загрузка видео (0/${totalAssetsToLoad})...`);

    const loadPromises = videoArray.map((path, index) => {
        return new Promise((resolve) => {
            const video = document.createElement('video');
            video.preload = 'auto';
            video.crossOrigin = 'anonymous';

            const timeout = setTimeout(() => {
                console.warn(`Таймаут загрузки видео: ${path}`);
                loadedAssetsCount++;
                updatePreloaderProgress(
                    (loadedAssetsCount / totalAssetsToLoad) * 100,
                    `Загрузка видео (${loadedAssetsCount}/${totalAssetsToLoad})...`
                );
                resolve();
            }, 10000);

            video.addEventListener('canplaythrough', () => {
                clearTimeout(timeout);
                loadedAssetsCount++;
                updatePreloaderProgress(
                    (loadedAssetsCount / totalAssetsToLoad) * 100,
                    `Загрузка видео (${loadedAssetsCount}/${totalAssetsToLoad})...`
                );
                resolve();
            }, { once: true });

            video.addEventListener('error', () => {
                clearTimeout(timeout);
                console.warn(`Ошибка загрузки видео: ${path}`);
                loadedAssetsCount++;
                updatePreloaderProgress(
                    (loadedAssetsCount / totalAssetsToLoad) * 100,
                    `Загрузка видео (${loadedAssetsCount}/${totalAssetsToLoad})...`
                );
                resolve();
            }, { once: true });

            video.src = path;
            video.load();

            if (!window.preloadedVideos) window.preloadedVideos = {};
            window.preloadedVideos[path] = video;
        });
    });

    await Promise.all(loadPromises);
    updatePreloaderProgress(100, 'Готово!');

    await new Promise(resolve => setTimeout(resolve, 300));
}

async function init() {
    try {
        createPreloader();
        updatePreloaderProgress(0, 'Инициализация...');
        createCenterTooltip();
        createNavButton();
        addLights();

        window.lastScene5Action = null;
        window.lastScene9State = null;

        const uniquePaths = new Set();

        for (const sceneKey in scenes) {
            const scene = scenes[sceneKey];
            if (scene.cubeMap) {
                scene.cubeMap.forEach(item => {
                    uniquePaths.add(item.path);
                    if (item.maskPath) uniquePaths.add(item.maskPath);
                });
            }
            if (scene.hotspots) {
                scene.hotspots.forEach(hotspot => {
                    if (hotspot.targetType === 'imagepopup' && hotspot.imageUrl) {
                        uniquePaths.add(hotspot.imageUrl);
                    }
                    if (hotspot.targetCubeMap) {
                        hotspot.targetCubeMap.forEach(item => {
                            uniquePaths.add(item.path);
                            if (item.maskPath) uniquePaths.add(item.maskPath);
                        });
                    }
                });
            }
        }

        const scene4Videos = [
            '../video/front4_1.webm',
            '../video/front4_1_mask.webm',
            '../video/front4_2.webm',
            '../video/front4_2_mask.webm'
        ];
        scene4Videos.forEach(path => uniquePaths.add(path));
		
		if (typeof booksConfig !== 'undefined') {
        for (const bookId in booksConfig) {
            const pages = booksConfig[bookId];
            if (Array.isArray(pages)) {
                pages.forEach(pagePath => {
                    uniquePaths.add(pagePath);
                });
            }
          }
        }

        const firstScene = scenes.scene1;
        firstScene.cubeMap.forEach(item => {
            uniquePaths.add(navigationVisible ? item.path : (item.maskPath || item.path));
        });

        const allAssets = Array.from(uniquePaths).map(path => {
            const isVideo = path.endsWith('.webm') || path.endsWith('.mp4');
            return { type: isVideo ? 'video' : 'image', path: path };
        });

        totalAssetsToLoad = allAssets.length;
        loadedAssetsCount = 0;

        console.log(`Загрузка ${totalAssetsToLoad} уникальных файлов`);

        updatePreloaderProgress(0, `Загрузка ресурсов (0/${totalAssetsToLoad})...`);

    const loadPromises = allAssets.map(asset => {
        return new Promise((resolve) => {
            let isResolved = false; 

            const finishLoading = () => {
                if (isResolved) return;
                isResolved = true;
                
                clearTimeout(timeout);
                loadedAssetsCount++;
                updatePreloaderProgress(
                    (loadedAssetsCount / totalAssetsToLoad) * 100,
                    `Загрузка (${loadedAssetsCount}/${totalAssetsToLoad})...`
                );
                resolve();
            };

            const timeout = setTimeout(() => {
                console.warn(`Таймаут загрузки: ${asset.path}`);
                finishLoading();
            }, 15000);

            if (asset.type === 'video') {
                const video = document.createElement('video');
                video.preload = 'auto';
                video.crossOrigin = 'anonymous';
                video.muted = true;
                video.playsInline = true;
                video.loop = true;

                let resolved = false;

                const doResolve = () => {
                    if (resolved) return;
                    resolved = true;
                    clearTimeout(timeout);
                    loadedAssetsCount++;
                    updatePreloaderProgress(
                        (loadedAssetsCount / totalAssetsToLoad) * 100,
                        `Загрузка (${loadedAssetsCount}/${totalAssetsToLoad})...`
                    );
                    resolve();
                };

                // Ждем canplaythrough, что означает достаточную буферизацию для воспроизведения
                video.addEventListener('canplaythrough', doResolve, { once: true });
                
                video.addEventListener('error', () => {
                    console.warn(`Ошибка загрузки видео: ${asset.path}`);
                    doResolve();
                }, { once: true });

                video.src = asset.path;
                video.load();

                if (!window.preloadedVideos) window.preloadedVideos = {};
                window.preloadedVideos[asset.path] = video;

                // ВАЖНО: Запускаем видео сразу, чтобы оно начало буферизироваться для воспроизведения
                // Это также помогает VideoTexture в Three.js получить первый кадр быстрее
                video.play().then(() => {
                    // Можно暂停ить сразу, если нужно, но лучше оставить играть, 
                    // так как в сцене 1 оно должно играть.
                    // Если видео не первой сцены, можно поставить на паузу, но для простоты оставим play.
                }).catch(e => {
                    // Автовоспроизведение может быть заблокировано браузером без взаимодействия,
                    // но так как видео muted, это редко бывает проблемой.
                });

                if (video.readyState >= 2) {
                    doResolve();
                }
            } else {
                const img = new Image();
                img.crossOrigin = 'anonymous';

                img.onload = finishLoading;
                img.onerror = () => {
                    console.warn(`Ошибка загрузки изображения: ${asset.path}`);
                    finishLoading();
                };

                img.src = asset.path;
            }
        });
    });

        await Promise.all(loadPromises);
        updatePreloaderProgress(95, 'Подготовка видео...');
        await new Promise(resolve => setTimeout(resolve, 500));

        updatePreloaderProgress(97, 'Сборка панорамы...');

        const texturesToLoad = firstScene.cubeMap.map(item => ({
            type: item.type,
            path: navigationVisible ? item.path : (item.maskPath || item.path),
            name: item.name
        }));

        const { materials, videos } = await loadCubeFacesWithPaths(texturesToLoad);

        currentCube = createCube(materials);
        scene.add(currentCube);
        currentCubeMaterials = materials;
        currentVideoElements = videos || [];
        currentScene = firstScene;
        currentSceneId = 'scene1';

        if (firstScene.cameraSettings) {
            applyCameraSettings(firstScene.cameraSettings);
        }

        createAllHotspots(currentScene.hotspots, 1000);

        renderer.domElement.addEventListener('click', onMouseClick);
        renderer.domElement.addEventListener('mousemove', onMouseMove);

    let isDragging = false;
    let touchStartTime = 0;
    let touchStartPos = { x: 0, y: 0 };

    function onInputStart(event) {
        if (isTransitioning || isReloading) return;
        
        isDragging = false;
        
        let clientX, clientY;
        if (event.type === 'touchstart') {
            if (event.touches.length > 1) return; 
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
            touchStartTime = Date.now();
            touchStartPos = { x: clientX, y: clientY };
        } else {
            clientX = event.clientX;
            clientY = event.clientY;
        }

        const mockEvent = {
            clientX: clientX,
            clientY: clientY,
            preventDefault: () => {}
        };
        
        onMouseMove(mockEvent);
    }

    function onInputMove(event) {
        if (isTransitioning || isReloading) return;

        let clientX, clientY;
        if (event.type === 'touchmove') {
            if (event.touches.length > 1) return;
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else {
            clientX = event.clientX;
            clientY = event.clientY;
        }

        if (touchStartPos.x && touchStartPos.y) {
            const diffX = Math.abs(clientX - touchStartPos.x);
            const diffY = Math.abs(clientY - touchStartPos.y);
            if (diffX > 5 || diffY > 5) {
                isDragging = true;
            }
        }

        const mockEvent = {
            clientX: clientX,
            clientY: clientY,
            preventDefault: () => {}
        };
        onMouseMove(mockEvent);
    }

    function onInputEnd(event) {
        if (isTransitioning || isReloading) return;

        if (event.type === 'touchend') {
            const touchDuration = Date.now() - touchStartTime;
            if (touchDuration < 300 && !isDragging) {
                const touch = event.changedTouches[0];
                const mockEvent = {
                    clientX: touch.clientX,
                    clientY: touch.clientY,
                    preventDefault: () => {}
                };
                onMouseClick(mockEvent);
            }
            touchStartPos = { x: 0, y: 0 };
        } else {
            if (!isDragging) {
                onMouseClick(event);
            }
        }
        isDragging = false;
    }

    renderer.domElement.addEventListener('mousedown', onInputStart);
    renderer.domElement.addEventListener('mousemove', onInputMove);
    renderer.domElement.addEventListener('mouseup', onInputEnd);

    renderer.domElement.addEventListener('touchstart', onInputStart, { passive: false });
    renderer.domElement.addEventListener('touchmove', onInputMove, { passive: false });
    renderer.domElement.addEventListener('touchend', onInputEnd, { passive: false });

    renderer.domElement.addEventListener('mouseleave', () => {
        if (hoveredHotspot) {
            renderer.domElement.classList.remove('hovering-hotspot');
            hoveredHotspot = null;
            hideCenterTooltip();
        }
        renderer.domElement.style.cursor = 'default';
    });

    renderer.domElement.addEventListener('mouseenter', () => {
        if (hoveredHotspot) {
            renderer.domElement.classList.add('hovering-hotspot');
        }
    });

    renderer.domElement.addEventListener('mousedown', () => {
        renderer.domElement.style.cursor = 'grabbing';
    });

    renderer.domElement.addEventListener('mouseup', () => {
        if (hoveredHotspot) {
            renderer.domElement.classList.add('hovering-hotspot');
            renderer.domElement.style.cursor = '';
        } else {
            renderer.domElement.classList.remove('hovering-hotspot');
            renderer.domElement.style.cursor = 'default';
        }
    });

    document.body.style.touchAction = 'pan-x pan-y';

        updatePreloaderProgress(100, 'Готово!');

        await new Promise(resolve => setTimeout(resolve, 300));
        hidePreloader();
    } catch (error) {
        console.error('Ошибка инициализации:', error);
        updatePreloaderProgress(100, 'Ошибка загрузки');
        setTimeout(() => hidePreloader(), 1000);
    }
}

window.addEventListener('beforeunload', () => {
    if (window.preloadedVideos) {
        for (const video of Object.values(window.preloadedVideos)) {
            if (video && video.pause) {
                video.pause();
                video.src = '';
                video.load();
            }
        }
    }
    if (window.videoTextureCache) {
        for (const entry of Object.values(window.videoTextureCache)) {
            if (entry.texture && entry.texture.dispose) {
                entry.texture.dispose();
            }
        }
    }
});

let lastFrameTime = 0;
const maxFPS = 60;
const frameInterval = 1000 / maxFPS;

function animate() {
    requestAnimationFrame(animate);
    const now = performance.now();
    if (now - lastFrameTime < frameInterval) return;
    lastFrameTime = now;

    controls.update();
    renderer.render(scene, camera);
}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.scene = scene;
window.camera = camera;
window.renderer = renderer;
window.controls = controls;
window.raycaster = raycaster;
window.mouse = mouse;
window.THREE = MOY;

init();
animate();

window.addEventListener('load', () => {
    setTimeout(() => {
        if (preloaderElement) {
            hidePreloader();
        }
    }, 1000);
});