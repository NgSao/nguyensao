"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const EducationSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Giáo Dục</h2>

            <div className="space-y-8">
                <div
                    className="flex gap-4 group cursor-pointer"
                    onClick={toggleExpand}
                >
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white">
                        <Image
                            src="https://hitu.edu.vn/wp-content/uploads/2021/12/favicon.ico"
                            alt="HITC Logo"
                            width={48}
                            height={48}
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                            <h3 className="font-bold text-lg">
                                Cao Đẳng Công Thương TP. Hồ Chí Minh (HITC)
                                <span
                                    className={`ml-2 text-zinc-400 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
                                        }`}
                                >
                                    {isExpanded ? 'v' : '>'}
                                </span>
                            </h3>
                            <span className="text-zinc-400 text-sm">2022 - 2025</span>
                        </div>
                        <p className="text-zinc-400">Chuyên ngành Công nghệ Phần mềm</p>

                        {isExpanded && (
                            <div className="mt-2">
                                <p className="text-zinc-400 mt-1">Thành tích:</p>
                                <div className="mt-4">
                                    <Image
                                        src="/thanhtich.jpg"
                                        alt="Certificate"
                                        width={400}
                                        height={600}
                                        className="w-full h-auto object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;