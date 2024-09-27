declare module 'chocolat' {
  export interface ChocolatSettings {
    container?: Window | Element;
    className?: string;
    imageSize?: 'scale-down' | 'contain' | 'cover' | 'native';
    initialZoomState?: string | null;
    allowFullScreen?: boolean;
    loop?: boolean;
    linkImages?: boolean;
    setIndex?: number;
    firstImageIndex?: number;
    lastImageIndex?: boolean | number;
    currentImageIndex?: number;
    initialized?: boolean;
    timer?: boolean | number;
    timerDebounce?: boolean | number;
    allowZoom?: boolean;
    setTitle?: () => string;
    description?: () => string;
    pagination?: () => string;
    afterInitialize?: () => void;
    afterMarkup?: () => void;
    afterImageLoad?: () => void;
    zoomedPaddingX?: (canvasWidth: number, imgWidth: number) => number;
    zoomedPaddingY?: (canvasHeight: number, imgHeight: number) => number;
  }

  export interface ChocolatImage {
    title?: string;
    src: string;
    height?: number;
    width?: number;
  }

  export interface ChocolatAPI {
    open: (i: number) => Promise<void>;
    close: () => Promise<void>;
    next: () => Promise<void>;
    prev: () => Promise<void>;
    goto: (i: number) => Promise<void>;
    current: () => number;
    position: () => { width: number; height: number; left: number; top: number };
    destroy: () => void;
    set: (property: keyof ChocolatSettings, value: any) => any;
    get: (property: keyof ChocolatSettings) => any;
    getElem: (name: string) => Element | null;
  }

  export class Chocolat {
    constructor(elements: NodeList | HTMLCollection | ChocolatImage[], settings: Partial<ChocolatSettings>);

    settings: ChocolatSettings;
    images: ChocolatImage[];
    api: ChocolatAPI;

    init(i: number): Promise<void>;
    load(i: number): Promise<void>;
    close(): Promise<void>;
    destroy(): void;
    change(step: number): Promise<void> | undefined;
    zoomIn(e: MouseEvent): Promise<void>;
    zoomOut(e: MouseEvent): Promise<void> | undefined;
  }

  function chocolat(elements: NodeList | HTMLCollection | ChocolatImage[], options?: Partial<ChocolatSettings>): Chocolat;

  export default chocolat;
}