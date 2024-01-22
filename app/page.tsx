import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana, rubik_marker_hatch } from '@/app/ui/fonts';
import Image from 'next/image';
// import { Entity, Scene } from 'aframe-react';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${rubik_marker_hatch.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
      <div class="example-container">
        <a-scene mindar-image="imageTargetSrc: ./assets/band-example/band.mind; showStats: true; autoStart: false; maxTrack: 1" embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
          <a-assets>
            <a-asset-item id="bearModel" src="./assets/band-example/bear/scene.gltf"></a-asset-item>
            <a-asset-item id="raccoonModel" src="./assets/band-example/raccoon/scene.gltf"></a-asset-item>
          </a-assets>

          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

          <a-entity mindar-image-target="targetIndex: 0">
            <a-gltf-model rotation="90 0 0 " position="0 0 0" scale="0.05 0.05 0.05" src="#raccoonModel" animation-mixer>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 1">
            <a-gltf-model rotation="90 0 0 " position="0 0 0" scale="0.05 0.05 0.05" src="#bearModel" animation-mixer>
          </a-entity>
        </a-scene>
      </div>
    </main>
  );
}
