// Type definitions for mindar-viewer
declare namespace JSX {
  interface IntrinsicElements {
    // a-scene
    'a-scene': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      'mindar-image'?: string;
      'color-space'?: string;
      embedded?: boolean;
      renderer?: string;
      'vr-mode-ui'?: string;
      'device-orientation-permission-ui'?: string;
      // more attributes...
    };

    // a-assets
    'a-assets': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;

    // a-asset-item
    'a-asset-item': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      id?: string;
      src?: string;
    };

    // a-camera
    'a-camera': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      position?: string;
      'look-controls'?: string;
    };

    // a-entity
    'a-entity': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      'mindar-image-target'?: string;
    };

    // a-plane
    'a-plane': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src?: string;
      position?: string;
      height?: string;
      width?: string;
      rotation?: string;
    };

    // a-gltf-model
    'a-gltf-model': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      rotation?: string;
      position?: string;
      scale?: string;
      src?: string;
      animation?: string;
    };

    // more elements...
  }
}

interface MindarImageSystem {
  start: () => void;
  stop: () => void;
  // here you can add other methods that can be called from the component
}

interface CustomSceneElement extends HTMLElement {
  systems: {
    'mindar-image-system': MindarImageSystem;
  };
  addEventListener(
    type: 'renderstart',
    listener: (this: CustomSceneElement, ev: Event) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  // here you can add other properties that can be accessed from the component
}
