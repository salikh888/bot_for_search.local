export default class Utils {

    private static normalizeQuery(item: string): string{
        return item.replace(/\s+/g, '-');
    }

    static queryMayker(city: string, item: string): string{
        return `/${city}/q-${this.normalizeQuery(item)}`
    }

}