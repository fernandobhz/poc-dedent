const dedent = require(`dedent`);

async function run() {
  const yaml = `
    a: 1
      a1: 1
      a2: 2
    b: 2
    c: 3
  `;

  const yamlDedented = dedent`
    a: 1
      a1: 1
      a2: 2
    b: 2
    c: 3
  `;

  console.log(yaml);
  console.log(yamlDedented);
}

run();
