"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { solutions } from "@/data/solutions";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function SolutionsGrid() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
            {solutions.map((solution) => (
                <Dialog key={solution.id}>
                    <DialogTrigger asChild>
                        <motion.div
                            variants={item}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full group"
                        >
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                                <p className="text-muted-foreground line-clamp-3 mb-6">{solution.whatItIs}</p>
                            </div>
                            <div className="flex items-center text-primary font-semibold mt-auto pt-4 border-t border-border group-hover:text-accent transition-colors">
                                Ver detalhes <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[600px] gap-6">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold pr-6">{solution.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6 pt-4 max-h-[70vh] overflow-y-auto pr-2">
                            <div>
                                <h4 className="flex items-center gap-2 font-bold text-lg mb-2 text-foreground">
                                    <CheckCircle2 className="text-primary" size={20} /> O que é
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">{solution.whatItIs}</p>
                            </div>

                            <div>
                                <h4 className="flex items-center gap-2 font-bold text-lg mb-2 text-foreground">
                                    <CheckCircle2 className="text-primary" size={20} /> Para quem serve
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">{solution.whoItsFor}</p>
                            </div>

                            <div className="bg-secondary/30 p-5 rounded-xl border border-border">
                                <h4 className="flex items-center gap-2 font-bold text-lg mb-2 text-foreground">
                                    <X className="text-destructive shrink-0" size={20} /> O que NÃO é
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">{solution.whatItIsNot}</p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            ))}
        </motion.div>
    );
}
