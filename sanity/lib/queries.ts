import { defineQuery } from "next-sanity";

export const SCHOOLS_QUERY = defineQuery(
    `*[_type == "school" && defined(slug.current) && !defined($search) || title match $search || district match $search || region match $search || residency match $search ] | order(_createdAt desc) { 
  gender,
  _id, 
  description,   
  region, 
  title,  
  residency, 
  views, 
}`
)

export const SCHOOL_BY_ID_QUERY = defineQuery(
  `*[_type == "school" && _id == $id][0]{
  district, 
  gender, 
  description, 
  _id, 
  _createdAt, 
  region, 
  title, 
  slug, 
  residency, 
  email, 
  views, 
  info
}`
)

export const SCHOOL_VIEWS_QUERY = defineQuery(
  `*[_type == 'school' && _id == $id][0]{
    _id,
    views,
  }`
)