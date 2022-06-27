



import { useGet_LessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";



export function SiderBar() {

  const { data } = useGet_LessonsQuery()
  console.log(data)
  return (

    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6v border-b border-gray-500 block">
        Cronograma de  aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availabletAt={new Date(lesson.availableAt)}
              type={lesson.lessonType} />
          )
        })}

      </div>
    </aside>
  );
}