console.error('⚙️ FILTER EXECUTED'); // 👈 Agregado para ver si se ejecuta

function cleanSingle(obj) {
  if (obj.meta && obj.meta.seq !== undefined) {
    delete obj.meta.seq;
  }

  if (obj.request && obj.request.params && obj.request.params.path !== undefined) {
    delete obj.request.params.path;
  }

  return obj;
}

function cleanData(data) {
  if (Array.isArray(data)) {
    return data.map(cleanSingle);
  } else {
    return cleanSingle(data);
  }
}

function main() {
  let input = '';

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => (input += chunk));
  process.stdin.on('end', () => {
    try {
      const parsed = JSON.parse(input);
      const cleaned = cleanData(parsed);
      process.stdout.write(JSON.stringify(cleaned, null, 2));
    } catch (e) {
      console.error('⚠️ Error en filtro:', e);
      process.stdout.write(input);
    }
  });
}
