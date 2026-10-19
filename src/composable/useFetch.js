import { ref } from "vue";

export function useFetch(url){
    const data= ref(null);
    const loading = ref(true);
    const error = ref(null);

    async function charger() {

        loading.value = true
        error.value = null
        try {
            const response = await fetch(url)
            if (!response.ok){
                throw new Error ('Erreur HTTP' + response.status)
            }
            data.value = await response.json()
        } catch(e) {
            error.value = e.message /* suffit de c/c le cours pour toute la partir fetch */
        } finally {
            loading.value = false
        }
    }

    charger();

    return {data, loading, error};
}