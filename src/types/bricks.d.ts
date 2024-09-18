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
    on: (event: string, callback: () => void) => BricksInstance;
    off: (event: string, callback: () => void) => BricksInstance;
    emit: (event: string, data?: any) => BricksInstance;
  }

  function bricks(options: BricksOptions): BricksInstance;

  export default bricks;
}