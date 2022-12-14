export interface CoinType {
  id: string;
  image: { large: string; small: string; thumb: string };
  description: {
    ar: string;
    bg: string;
    cs: string;
    da: string;
    de: string;
    el: string;
    en: string;
    es: string;
    fi: string;
    fr: string;
    he: string;
    hi: string;
    hr: string;
    hu: string;
    id: string;
    it: string;
    ja: string;
    ko: string;
    lt: string;
    nl: string;
    no: string;
    pt: string;
    ro: string;
    ru: string;
    sk: string;
    sl: string;
    sv: string;
    th: string;
    tr: string;
    uk: string;
    vi: string;
    zh: string;
  };
  name: string;
  market_cap_rank: number;
}
export interface Coins {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null;
  symbol: string;
  total_supply: number;
  total_volume: number;
}

export interface CoinProps {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  market_data: {
    market_cap: {
      aed: number;
      ars: number;
      aud: number;
      bch: number;
      bdt: number;
      bhd: number;
      bits: number;
      bmd: number;
      bnb: number;
      brl: number;
      btc: number;
      cad: number;
      chf: number;
      clp: number;
      cny: number;
      czk: number;
      dkk: number;
      dot: number;
      eos: number;
      eth: number;
      eur: number;
      gbp: number;
      hkd: number;
      huf: number;
      idr: number;
      ils: number;
      inr: number;
      jpy: number;
      krw: number;
      kwd: number;
      link: number;
      lkr: number;
      ltc: number;
      mmk: number;
      mxn: number;
      myr: number;
      ngn: number;
      nok: number;
      nzd: number;
      php: number;
      pkr: number;
      pln: number;
      rub: number;
      sar: number;
      sats: number;
      sek: number;
      sgd: number;
      thb: number;
      try: number;
      twd: number;
      uah: number;
      usd: number;
      vef: number;
      vnd: number;
      xag: number;
      xau: number;
      xdr: number;
      xlm: number;
      xrp: number;
      yfi: number;
      zar: number;
    };
    current_price: {
      aed: number;
      ars: number;
      aud: number;
      bch: number;
      bdt: number;
      bhd: number;
      bits: number;
      bmd: number;
      bnb: number;
      brl: number;
      btc: number;
      cad: number;
      chf: number;
      clp: number;
      cny: number;
      czk: number;
      dkk: number;
      dot: number;
      eos: number;
      eth: number;
      eur: number;
      gbp: number;
      hkd: number;
      huf: number;
      idr: number;
      ils: number;
      inr: number;
      jpy: number;
      krw: number;
      kwd: number;
      link: number;
      lkr: number;
      ltc: number;
      mmk: number;
      mxn: number;
      myr: number;
      ngn: number;
      nok: number;
      nzd: number;
      php: number;
      pkr: number;
      pln: number;
      rub: number;
      sar: number;
      sats: number;
      sek: number;
      sgd: number;
      thb: number;
      try: number;
      twd: number;
      uah: number;
      usd: number;
      vef: number;
      vnd: number;
      xag: number;
      xau: number;
      xdr: number;
      xlm: number;
      xrp: number;
      yfi: number;
      zar: number;
    };
  };
  description: {
    ar: string;
    bg: string;
    cs: string;
    da: string;
    de: string;
    el: string;
    en: string;
    es: string;
    fi: string;
    fr: string;
    he: string;
    hi: string;
    hr: string;
    hu: string;
    id: string;
    it: string;
    ja: string;
    ko: string;
    lt: string;
    nl: string;
    no: string;
    pt: string;
    ro: string;
    ru: string;
    sk: string;
    sl: string;
    sv: string;
    th: string;
    tr: string;
    uk: string;
    vi: string;
    zh: string;
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null;
  symbol: string;
  total_supply: number;
  total_volume: number;
}

export interface History {
  prices: number[][];

  market_price: number[][];
  otal_volumes: number[][];
}
