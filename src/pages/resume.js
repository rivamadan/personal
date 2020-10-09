import React, { useState } from 'react'
import JSONData from '../../content/resume.json'

function ResumeSectionTitle(props) {
  const {title} = props;

  return <div>{title}</div>
}

function ResumeBuilder() {
  return (
    <>
      <ResumeHeader></ResumeHeader>
      <ResumeSummary></ResumeSummary>
      <ResumeEmployment></ResumeEmployment>
      <ResumeProjects></ResumeProjects>
      <ResumeEducation></ResumeEducation>
      <ResumeSkills></ResumeSkills>
    </>
  );
}

function ResumeHeader() {
  const headerData = JSONData.header;

  return (
    <header>
      <div>{headerData.name}</div>
      <div>{headerData.email}</div>
      <div>{headerData.phone}</div>
      <div>{headerData.linkedin}</div>
      <div>{headerData.github}</div>
    </header>
  );
}

function ResumeEducation() {
  return (
    <>
      <ResumeSectionTitle title="Education"></ResumeSectionTitle>
      {JSONData.education.map(college => {
        return (
          <>
            <div>{college.school}</div>
            <div>{college.year}</div>
            <div>{college.majors.join(', ')}</div>
            <div>Minors: {college.minors.join(', ')}</div>
          </>
        );
      })}
    </>
  );
}

function ResumeSummary() {
  return <div>{JSONData.summary}</div>
}

function ResumeSkills() {
  return (
    <>
    <ResumeSectionTitle title="Skills"></ResumeSectionTitle>
      <div>Technical: {JSONData.skills.techincal.join(', ')}</div>
      <div>Other: {JSONData.skills.other.join(', ')}</div>
    </>
  );
}

function ResumeEmployment() {
  return (
    <>
      <ResumeSectionTitle title="Employment"></ResumeSectionTitle>
      {JSONData.employment.map(company => {
        return (
          <>
            <div>{company.company}</div>
            {company.roles.map(role => {
              return (
                <>
                  <div>{role.title}</div>
                  <div>{role.time}</div>
                  <ul>
                    {role.bullets.map(text => {
                      return <li>{text}</li>
                    })}
                  </ul>
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
}

function ResumeProjects() {
  return (
    <>
      <ResumeSectionTitle title="Projects"></ResumeSectionTitle>
      <div>Projects here</div>
    </>
  );
}

export default function Resume() {
  return <ResumeBuilder></ResumeBuilder>;
}
