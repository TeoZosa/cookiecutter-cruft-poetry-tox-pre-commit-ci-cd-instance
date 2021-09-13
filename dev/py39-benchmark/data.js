window.BENCHMARK_DATA = {
  "lastUpdate": 1631548437600,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "ad221c71292383e6aae28abbc19a0c81b5cc77ac",
          "message": "Merge pull request #218 from TeoZosa/dependabot/pip/sphinx-4.2.0",
          "timestamp": "2021-09-13T14:23:20Z",
          "tree_id": "accf806f68780b5fbcde42ab43d478f61f3d6517"
        },
        "date": 1631548240015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 278.6279151828159,
            "unit": "iter/sec",
            "range": "stddev: 0.0006893441583141363",
            "extra": "mean: 3.5890158362053235 msec\nrounds: 116"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 761.2935687878555,
            "unit": "iter/sec",
            "range": "stddev: 0.0002931547249727431",
            "extra": "mean: 1.313553720928205 msec\nrounds: 645"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1604.4389541449698,
            "unit": "iter/sec",
            "range": "stddev: 0.00018199015288476565",
            "extra": "mean: 623.2708308512214 usec\nrounds: 739"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "4cd8aeb5be3eb408ab23973e23b88de76067eeb1",
          "message": "Merge pull request #219 from TeoZosa/dependabot/pip/tox-gh-actions-2.7.0",
          "timestamp": "2021-09-13T14:41:50Z",
          "tree_id": "691e2f5561f50e01326d92c3220b8eb8475b5502"
        },
        "date": 1631548434890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 330.9103576277787,
            "unit": "iter/sec",
            "range": "stddev: 0.00026229314831395804",
            "extra": "mean: 3.02196645390242 msec\nrounds: 141"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 914.0752165120026,
            "unit": "iter/sec",
            "range": "stddev: 0.00015000236279911225",
            "extra": "mean: 1.0940018741738515 msec\nrounds: 906"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1919.7124140025228,
            "unit": "iter/sec",
            "range": "stddev: 0.00012504441024563682",
            "extra": "mean: 520.9113577147946 usec\nrounds: 875"
          }
        ]
      }
    ]
  }
}