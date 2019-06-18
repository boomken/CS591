export class PRICE {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  date_added: string;
  num_market_pairs: number;
  tags: string[];
  platform: string;
  cmc_rank: number;
  last_updated: string;
  quote: { price: number;
    volume_24h: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    market_cap: number;
    last_updated: string;};
}
