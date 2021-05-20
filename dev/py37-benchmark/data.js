window.BENCHMARK_DATA = {
  "lastUpdate": 1621487707061,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "57510490247a21f8d5fa3c7c47d784bada3b8a9c",
          "message": "Merge pull request #173 from TeoZosa/make-package-support-conditionally-included\n\n✨ Make Package Support Conditionally Included\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e25e61f",
          "timestamp": "2021-05-20T05:04:49Z",
          "tree_id": "12f75f85fa33b76e9cd7b5ccd2004a35ec5e4ad3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/57510490247a21f8d5fa3c7c47d784bada3b8a9c"
        },
        "date": 1621487493809,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1058.3816371964492,
            "unit": "iter/sec",
            "range": "stddev: 0.00012215954819783315",
            "extra": "mean: 944.838765956771 usec\nrounds: 282"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1442.4792816150978,
            "unit": "iter/sec",
            "range": "stddev: 0.00009074588076105553",
            "extra": "mean: 693.2508582586588 usec\nrounds: 1150"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9049.014858156326,
            "unit": "iter/sec",
            "range": "stddev: 0.00002878807736174445",
            "extra": "mean: 110.50926710531924 usec\nrounds: 1505"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "f5d3fd97def12a5db4e9430da5622e3542046b57",
          "message": ":recycle: Rename `provision_environment` target to `provision-environment`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6babf43",
          "timestamp": "2021-05-20T05:08:28Z",
          "tree_id": "112912e95e0da21058f0fe07aac3185334ad02b7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f5d3fd97def12a5db4e9430da5622e3542046b57"
        },
        "date": 1621487705057,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1143.8575703244555,
            "unit": "iter/sec",
            "range": "stddev: 0.00008798711081480305",
            "extra": "mean: 874.2347176286553 usec\nrounds: 556"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1698.850313269917,
            "unit": "iter/sec",
            "range": "stddev: 0.00007043959697204518",
            "extra": "mean: 588.6333788144158 usec\nrounds: 1312"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12194.085831666938,
            "unit": "iter/sec",
            "range": "stddev: 0.000009930387357950144",
            "extra": "mean: 82.00696745983947 usec\nrounds: 1598"
          }
        ]
      }
    ]
  }
}