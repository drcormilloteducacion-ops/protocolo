export interface PrescriptionStep {
  tema: string;
  etapas: string[];
  frases: string[];
}

export interface Subsystem {
  title: string;
  iconName: 'Stethoscope' | 'UserCircle' | 'HeartPulse' | 'Briefcase' | 'Globe' | 'GraduationCap';
  items: string[];
}

export const PRESCRIPTION_DATA: PrescriptionStep[] = [
  {
    tema: "RAZONES DEL TRATAMIENTO",
    etapas: [
      "1. El médico reformula las quejas del paciente.",
      "2. Se enuncia el diagnóstico.",
      "3. Se nombra el tratamiento."
    ],
    frases: [
      "1. Si yo comprendí bien, tú me has dicho... ¿Es así?",
      "2. Viendo los resultados de tus estudios, veo que tienes...",
      "3. Para tratar tu problema te voy a dar... Según lo que evaluamos hay varias opciones... ¿por cuál de estas podrías empezar...?"
    ]
  },
  {
    tema: "EXPLICACIONES DEL TRATAMIENTO",
    etapas: [
      "4. ¿Para qué sirve este tratamiento?",
      "5. ¿Cómo se toma?",
      "6. ¿Cuáles son los efectos secundarios?"
    ],
    frases: [
      "4. Las mejoras que podemos esperar son...",
      "5. Vos deberás hacer el tratamiento de la siguiente manera...",
      "6. Es posible, sin embargo, que ocurra... En ese caso..."
    ]
  },
  {
    tema: "EVALUACIÓN DEL TRATAMIENTO",
    etapas: [
      "7. Lo que controla el médico. Lo que controla el paciente.",
      "8. Evaluación de la entrevista.",
      "9. ¿Qué cuestiones discutir?"
    ],
    frases: [
      "7. En cuanto a mí, yo evaluaré... Con este tratamiento, tendrías que observar...",
      "8. Para estar seguro de que todo esté claro, vamos a ver algunos puntos. Por ejemplo, ¿qué harías si...?",
      "9. ¿Tienes alguna pregunta, algún punto que desearías discutir?"
    ]
  },
  {
    tema: "SÍNTESIS DE LA PRESCRIPCIÓN",
    etapas: [
      "10. Reformulación de etapas de la entrevista."
    ],
    frases: [
      "10. Entonces, tú tienes... Debes hacer... Vamos a ver el resultado a través de... Nos veremos en... días para ver el efecto del tratamiento."
    ]
  }
];

export const SUBSYSTEMS_DATA: Subsystem[] = [
  {
    title: "Subsistema Biomédico (8 temas)",
    iconName: 'Stethoscope',
    items: [
      "1. Realizar un examen médico.",
      "2. Trabajo de laboratorio, rayos X.",
      "3. Explicación de los resultados al paciente.",
      "4. Conversar sobre las razones del tratamiento.",
      "5. Preguntar al paciente si tuvo dificultades para cumplir el tratamiento y conversar sobre posibles soluciones si es necesario.",
      "6. Evaluar el efecto del tratamiento con el paciente.",
      "7. Explicar cómo evaluará el médico el efecto del tratamiento.",
      "8. Explicar qué puede evaluar el paciente."
    ]
  },
  {
    title: "Subsistema Psicológico (6 temas)",
    iconName: 'UserCircle',
    items: [
      "9. Discutir con el paciente cómo se maneja con la enfermedad (estrategias de control).",
      "10. ¿Cómo encuentra el paciente la energía necesaria para continuar el tratamiento día tras día? (Empowerment).",
      "11. ¿Cómo reacciona al diagnóstico?",
      "12. ¿Cómo reacciona al tipo de tratamiento que está recibiendo? ¿Propondría otras cosas? (creencias de salud).",
      "13. ¿Pueden describirse las esperanzas y los miedos?",
      "14. Para el manejo de la enfermedad ¿cómo define el paciente su rol y el del médico? (locus de control)."
    ]
  },
  {
    title: "Subsistema de la Familia (3 temas)",
    iconName: 'HeartPulse',
    items: [
      "15. ¿Cómo está reaccionando la familia, o la persona más allegada del paciente?",
      "16. Recibieron información o capacitación para controlar la enfermedad? Si no es así, ¿cómo podría proporcionársele?",
      "17. ¿Cómo ayudan al paciente con la enfermedad y su control?"
    ]
  },
  {
    title: "Subsistema Profesional (3 temas)",
    iconName: 'Briefcase',
    items: [
      "18. ¿Quién sabe sobre la enfermedad en el lugar de trabajo?",
      "19. ¿Qué arreglos hizo con el empleador?",
      "20. ¿Obstaculiza la enfermedad su actividad profesional?"
    ]
  },
  {
    title: "Subsistema Socio-cultural (2 temas)",
    iconName: 'Globe',
    items: [
      "21. ¿Cómo interfieren la enfermedad y el tratamiento con la vida social?",
      "22. ¿Qué tipo de actitud piensa que tiene la sociedad cuando se enfrenta a esta enfermedad? (creencias sociales de salud)."
    ]
  },
  {
    title: "Educación Terapéutica (3 temas)",
    iconName: 'GraduationCap',
    items: [
      "23. ¿Cómo se le proporcionó su educación terapéutica?",
      "24. Evaluación de la capacidad del paciente para enfrentar situaciones importantes con su enfermedad en su vida diaria.",
      "25. ¿Qué soluciones eligió para el mejor manejo de su tratamiento?"
    ]
  }
];
