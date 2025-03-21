"use client"
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader, link } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { experience } from "@/constants";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="overflow-hidden py-20">
      <div className='group relative py-10 max-w-fit mx-auto'>
          <h1 className='text-center text-gray-300 font-bold text-4xl '>
          Work Experience
          </h1>
          <span className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0 opacity-100 transition group:opacity-100"></span>
      </div>
      <div className="flex max-w-4xl mx-auto flex-col">
        {/* Large screen */}
        <div className="hidden sm:flex bg-shadow">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          >
            <Tabs aria-label="Dynamic tabs" items={experience} color="default" variant="light" isVertical>
              {(item) => (
                <Tab key={item.id} title={item.label} className="bg-transparent">
                  <Card className="bg-black ">
                    <CardBody>
                      <div>
                        <h1 className=" text-left sm:text-2xl mb-2 flex gap-2 sm:text-center items-center font-extrabold ">{item.position}
                          <span>
                            <p className="text-gray-600 text-xl font-semibold">{item.date}</p>
                          </span> </h1>
                        <p className="text-gray-400 lg:text-xl text-lg mt-1">{item.content}</p>
                        <div color="secondary">
                          {
                            item.techStack.map((tech, index) => (
                              <Chip variant="bordered" key={index} className="m-1 font-medium">{tech}</Chip>
                            ))
                          }
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
              )}
            </Tabs>
          </motion.div>
        </div>
        {/* Large screen */}
        <div className="sm:hidden flex px-2">
          <Tabs items={experience} variant="light" color="default" isVertical={false}>
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <Card className="bg-treansparent cursor-pointer ">
                  <CardBody>
                    <div>
                      <h1 className=" text-left sm:text-2xl mb-2 flex gap-2 sm:text-center items-center font-extrabold ">{item.position}
                        <span>
                          <p className="text-gray-600 text-xl font-semibold">{item.date}</p>
                        </span> </h1>
                      <p className="text-gray-400 lg:text-xl text-lg mt-1">{item.content}</p>
                      <div color="secondary">
                        {
                          item.techStack.map((tech, index) => (
                            <Chip variant="bordered" key={index} className="m-1 font-medium">{tech}</Chip>
                          ))
                        }
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </section>
  );
}