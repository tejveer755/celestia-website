"use client";
import { useParams } from 'next/navigation';
import Details from '../../../components/Detail'; 

export default function EventDetailPage() {
  const { eventId } = useParams();
  
  return (
    <Details id={parseInt(eventId)} />
  );
}
