import { reviews } from "../../utils/content";

export default function Reviews() {
  return (
    <section className="flex flex-wrap gap-x-4 gap-y-4 max-xl:gap-x-3">
      <ul className="flex">
        {reviews.map((review) => (
          <li key={review.id} className="-mr-4 last:mr-0">
            <img
              className="border-primary-100 h-8 rounded-full border-2 max-xl:h-10"
              src={review.src}
              alt={review.alt}
            />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <p className="text-primary-100 text-md/loose font-light max-lg:text-base/loose">
          Trusted by{" "}
          <span className="text-primary-500 font-bold tracking-tighter">
            12,653+
          </span>{" "}
          productivity junkies
        </p>
      </div>
    </section>
  );
}
