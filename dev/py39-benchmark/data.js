window.BENCHMARK_DATA = {
  "lastUpdate": 1628300439651,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "6137ec14a15bf1633a47ac3e957514503b1aba90",
          "message": ":ambulance: Fix jinja template syntax errors\n\nExample error log:\n```\nRun cruft \\\n  cruft \\\n    create \\\n    https://github.com/\"${META_PROJECT_REPO}\" \\\n    --overwrite-if-exists \\\n    --no-input \\\n    --checkout=\"${GITHUB_REF##*/}\" \\\n    --extra-context=\"${extra_context}\"\n  shell: /usr/bin/bash -e {0}\n  env:\n    COOKIECUTTER_META_PROJECT: cookiecutter-cruft-poetry-tox-pre-commit-ci-cd\n    META_PROJECT_REPO: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd\n    COOKIECUTTER_PROJECT_INSTANCE: cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance\n    PROJECT_INSTANCE_REPO: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance\n    PIP_CONSTRAINTS_FILE: .github/workflows/constraints.txt\n    pythonLocation: /opt/hostedtoolcache/Python/3.9.6/x64\n    LD_LIBRARY_PATH: /opt/hostedtoolcache/Python/3.9.6/x64/lib\n    extra_context: {\n    \"project_name\": \"cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance\",\n    \"project_type\": \"package\",\n    \"jupyter_notebook_support\": \"yes\"\n  }\n\nTraceback (most recent call last):\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/cookiecutter/generate.py\", line 352, in generate_files\n    generate_file(\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/cookiecutter/generate.py\", line 175, in generate_file\n    rendered_file = tmpl.render(**context)\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/jinja2/environment.py\", line 1304, in render\n    self.environment.handle_exception()\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/jinja2/environment.py\", line 925, in handle_exception\n    raise rewrite_traceback_stack(source=source)\n  File \"./.github/workflows/release.yml\", line 119, in top-level template code\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/jinja2/environment.py\", line 474, in getattr\n    return getattr(obj, attribute)\njinja2.exceptions.UndefinedError: 'needs' is undefined\n\nDuring handling of the above exception, another exception occurred:\n\nTraceback (most recent call last):\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/bin/cruft\", line 8, in <module>\n    sys.exit(app())\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/typer/main.py\", line 214, in __call__\n    return get_command(self)(*args, **kwargs)\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/click/core.py\", line 829, in __call__\n    return self.main(*args, **kwargs)\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/click/core.py\", line 782, in main\n    rv = self.invoke(ctx)\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/click/core.py\", line 1259, in invoke\n    return _process_result(sub_ctx.command.invoke(sub_ctx))\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/click/core.py\", line 1066, in invoke\n    return ctx.invoke(self.callback, **ctx.params)\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/click/core.py\", line 610, in invoke\n    return callback(*args, **kwargs)\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/typer/main.py\", line 497, in wrapper\n    return callback(**use_params)  # type: ignore\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/cruft/_cli.py\", line 104, in create\n    _commands.create(\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/cruft/_commands/utils/__init__.py\", line 14, in wrapper\n    return f(*args, **kwargs)\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/cruft/_commands/create.py\", line 45, in create\n    generate_files(\n  File \"/opt/hostedtoolcache/Python/3.9.6/x64/lib/python3.9/site-packages/cookiecutter/generate.py\", line 359, in generate_files\n    raise UndefinedVariableInTemplate(msg, err, context)\ncookiecutter.exceptions.UndefinedVariableInTemplate: Unable to create file '.github/workflows/release.yml'. Error message: 'needs' is undefined. Context: OrderedDict([('cookiecutter', OrderedDict([('project_name', 'cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance'), ('project_slug', 'cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance'), ('package_name', 'cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance'), ('friendly_name', 'Cookiecutter Cruft Poetry Tox Pre Commit Ci Cd Instance'), ('author', 'Teo Zosa'), ('email', 'teo@sonosim.com'), ('project_type', 'package'), ('jupyter_notebook_support', 'yes'), ('remote_vcs_host', 'github'), ('remote_vcs_url', 'https://github.com'), ('remote_vcs_username', 'TeoZosa'), ('container_registry_namespace', 'teozosa'), ('project_repository_url', 'https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance'), ('documentation_url', 'https://cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance.readthedocs.io'), ('adr_documentation_url', 'https://TeoZosa.github.io/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/adl/'), ('version', '0.0.0'), ('_copy_without_render', ['docs/source/_templates/*']), ('_template', 'https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd')]))])\nError: Process completed with exit code 1.\n```\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a81e8c1",
          "timestamp": "2021-08-07T01:33:51Z",
          "tree_id": "9dc0642b90ea1d6de2277c88e418fcd3896c0226"
        },
        "date": 1628300437504,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1101.4509728367814,
            "unit": "iter/sec",
            "range": "stddev: 0.00004140078287531156",
            "extra": "mean: 907.8933376621433 usec\nrounds: 539"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1635.2217493282046,
            "unit": "iter/sec",
            "range": "stddev: 0.000030286910852790495",
            "extra": "mean: 611.5378543679647 usec\nrounds: 1339"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12720.19055039835,
            "unit": "iter/sec",
            "range": "stddev: 0.000008431905155156075",
            "extra": "mean: 78.6151745162877 usec\nrounds: 1679"
          }
        ]
      }
    ]
  }
}