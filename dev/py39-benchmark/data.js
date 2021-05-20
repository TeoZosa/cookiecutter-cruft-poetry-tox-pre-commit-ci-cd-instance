window.BENCHMARK_DATA = {
  "lastUpdate": 1621487739684,
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
        "date": 1621487463552,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1039.5786439824383,
            "unit": "iter/sec",
            "range": "stddev: 0.00014572325670716619",
            "extra": "mean: 961.9281867595706 usec\nrounds: 589"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1479.034120562496,
            "unit": "iter/sec",
            "range": "stddev: 0.00010987761336203291",
            "extra": "mean: 676.1169239420162 usec\nrounds: 1249"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10105.755971641505,
            "unit": "iter/sec",
            "range": "stddev: 0.000037376473551922735",
            "extra": "mean: 98.95350756600224 usec\nrounds: 1982"
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
        "date": 1621487734458,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 939.1853257134012,
            "unit": "iter/sec",
            "range": "stddev: 0.00017173627125529383",
            "extra": "mean: 1.0647525814358356 msec\nrounds: 571"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1334.7021248604497,
            "unit": "iter/sec",
            "range": "stddev: 0.00027302485042514206",
            "extra": "mean: 749.2308443762727 usec\nrounds: 1298"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8779.125137144189,
            "unit": "iter/sec",
            "range": "stddev: 0.00010435951062348041",
            "extra": "mean: 113.9065663580797 usec\nrounds: 1944"
          }
        ]
      }
    ]
  }
}