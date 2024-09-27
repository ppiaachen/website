declare module "bricks.js" {
  interface SizeDetail {
    mq?: string;
    columns: number;
    gutter: number;
  }

  interface BricksOptions {
    packed: string;
    sizes: SizeDetail[];
    position?: boolean;
    container: HTMLElement | string;
  }

  interface BricksInstance {
    pack: () => BricksInstance;
    update: () => BricksInstance;
    resize: (flag?: boolean) => BricksInstance;
    on: (event: string, handler: () => void) => BricksInstance;
    once: (event: string, handler: () => void) => BricksInstance;
    off: (event: string, handler?: () => void) => BricksInstance;
    emit: (event: string, arguments?: any) => BricksInstance;
  }

  function bricks(options: BricksOptions): BricksInstance;

  export default bricks;
}
