export interface ICaso {
  id: number;
  numero: number;
  origen: number;
  entregaexterna: boolean;
  fechaocurrencia: Date;
  descripcion: string;
  aduana: number;
  recintocontrol: number;
  otropuntocontrol: number;
  tipoestado: string | null;
  fecharegistro: Date;
  funcionariocreador: string | null;
  tipoorigen: number;
  estadocaso: number;
  puntocontrol: string | null;
  areaRiesgo: string[];
}

export interface CasoStore {
  casos: ICaso[];
  listCasos: () => void;
  setCasos: (casos: ICaso[]) => void;
  addCaso: (caso: ICaso) => void;
  updateCaso: (caso: ICaso) => void;
  deleteCaso: (id: number) => void;
}

export interface IAduana {
  //Selector de Aduanas
  id: number;
  name: string;
}

export interface AduanaStore {
  aduanas: IAduana[];
  listAduanas: () => void;
  setAduanas: (aduanas: IAduana[]) => void;
}

export interface IAreaRiesgo {
  //Selector de Areas de Riesgo
  id: number;
  name: string;
}

export interface AreaRiesgoStore {
  areasRiesgo: IAreaRiesgo[];
  listAreasRiesgo: () => void;
  setAreasRiesgo: (areasRiesgo: IAreaRiesgo[]) => void;
}

interface IRecintoControl {
  id_recinto_control: number;
  codigo_recinto_control: string | null;
  recinto: string;
  cod_tipo_recinto: number;
  codigo_aduana: string;
  cod_region_origen: number;
  fecini: Date;
  fecfin: Date;
}

interface RecintoControlStore {
  recintosControl: IRecintoControl[];
  listRecintosControl: () => void;
  setRecintosControl: (recintosControl: IRecintoControl[]) => void;
}

interface IPuntoControl {
  id_punto_control: number;
  codigo_aduana: number;
  recinto_control: string;
  punto_control: string;
  cod_tipo_recinto: number;
  cod_region_origen: number;
  cod_comuna: number;
  coordenadas_geograficas: string;
  fecini: Date;
  fecter: Date;
  id_recinto_control: number;
}

interface PuntoControlStore {
  puntosControl: IPuntoControl[];
  listPuntosControl: () => void;
  setPuntosControl: (puntosControl: IPuntoControl[]) => void;
}

interface ITipoEstadoCaso {
  id: number;
  code: string;
  name: string;
}

interface TipoEstadoCasoStore {
  tiposEstadoCaso: ITipoEstadoCaso[];
  listTiposEstadoCaso: () => void;
  setTiposEstadoCaso: (tiposEstadoCaso: ITipoEstadoCaso[]) => void;
}
