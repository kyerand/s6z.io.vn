import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className='mb-8 flex gap-1 justify-between'>
        <div>
          <h1 className="text-2xl font-semibold tracking-tighter">
            {`Duc-Hung Ho (Hồ Đức Hưng)`}
          </h1>
          <p className=""><i>From alumni of HCMUT-VNUHCM (B.Eng)</i></p>
        </div>
        <div className='gap-1'>
          <Image height={40} width={40} alt='hcmut' src="/hcmut.png" />
        </div>
      </div>
      <p className="mb-4">
        {`A software engineer with a passion for building server-side
          applications. I specialize in creating efficient, user-friendly
          interfaces and robust backends, ensuring seamless performance across
          devices.`}
      </p>
      <p className="mb-4">
        {`My journey in software development has been driven by a commitment to
          quality and a love for problem-solving. I thrive on challenges that
          push the boundaries of what's possible in web development.`}
      </p>
      <p className="mb-4">
        {`I create open-source projects in my free time. It called 'Sentinez', You can find it below.`}
      </p>
      <a
        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        rel="noopener noreferrer"
        target="_blank"
        href="https://vercel.com/templates/next.js/portfolio-starter-kit"
      >
        <p className="h-7"><b>SENTINEZ S6Z</b></p>
      </a>
      <div className='mb-8 flex gap-1'>
        <Image height={40} width={40} alt='s6z' src="/s6z.png" />
        <Image height={40} width={40} alt='s6z2' src="/s6z-black.png" />
        <Image height={40} width={40} alt='s6z3' src="/s6z-light.png" />
        <Image height={40} width={40} alt='s6z4' src="/s6z-nobg.png" />
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
