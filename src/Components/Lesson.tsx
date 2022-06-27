

import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availabletAt: Date;
  type: 'live' | 'class';
}




export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availabletAt)
  const availableDateFormatted = format(props.availabletAt, "EEEE' . ' d' de ' MMM' . ' K' h' mm", {
    locale: ptBR,
  })

  const isActiveLesson = slug == props.slug

  return (
    <Link to={`/evento/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : ''}`}>
        <header className="flex-items-center justify-between ${isActiveLesson">
          {isLessonAvailable ? (
            <span className={`text-sm text-blue-500 font-medium flex items-center gap-2 ${isActiveLesson ? 'text-white' : ''}`}>
              <CheckCircle size={20} />
              Conteúdo liberado</span>
          ) : (<span className="text-sm  text-orange-500 font-medium flex items-center gap-2">
            <Lock size={20} />
            Em breve</span>)}
          <span className={`text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold${isActiveLesson ? 'border border-white' : ''}`}>
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}</span>
        </header>
        <strong className="text-gray-200 mt-5">{props.title}</strong>
      </div>
    </Link>
  );
}


