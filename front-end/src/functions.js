import PCIcon from '@/components/icons/PCIcon.vue';
import XboxIcon from '@/components/icons/XboxIcon.vue';
import PlaystationIcon from '@/components/icons/PlaystationIcon.vue';
import NintendoIcon from '@/components/icons/NintendoIcon.vue';

export function getPlatform(platformName) {
    switch (platformName) {
        case 'pc':
            return PCIcon;
        case 'xbox':
            return XboxIcon;
        case 'playstation':
            return PlaystationIcon;
        case 'nintendo':
            return NintendoIcon;
        default:
            return null;
    }
}
