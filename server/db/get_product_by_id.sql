select *
from dw_store join detail_table on (dw_store.id_primary_key = detail_table.detail_id)
where dw_store.id_primary_key = $1;