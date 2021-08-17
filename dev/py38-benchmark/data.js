window.BENCHMARK_DATA = {
  "lastUpdate": 1629209854805,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "07881b888615f67110ee5e892d7d8906dbf2efa6",
          "message": "Merge pull request #287 from TeoZosa/dependabot/pip/icontract-2.5.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@63fb803",
          "timestamp": "2021-08-17T13:49:43Z",
          "tree_id": "6fb9ac1e2213bc90edcc238550dbd1f67ae9937b"
        },
        "date": 1629209591566,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 389.5359053812971,
            "unit": "iter/sec",
            "range": "stddev: 0.0002368434709098349",
            "extra": "mean: 2.5671574460412074 msec\nrounds: 139"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1094.7125115095516,
            "unit": "iter/sec",
            "range": "stddev: 0.00010880452294576742",
            "extra": "mean: 913.481840653353 usec\nrounds: 979"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2355.057802151457,
            "unit": "iter/sec",
            "range": "stddev: 0.00005520697148230484",
            "extra": "mean: 424.6180280952988 usec\nrounds: 961"
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
          "id": "fa516b23320004be83bc9c930c086371c02d7941",
          "message": "Merge pull request #168 from TeoZosa/dependabot/pip/icontract-2.5.4",
          "timestamp": "2021-08-17T13:40:41Z",
          "tree_id": "e1ab35bd28467e56ab609384ff729a815aae04dd"
        },
        "date": 1629209852964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 256.9154278686498,
            "unit": "iter/sec",
            "range": "stddev: 0.0005429765521111331",
            "extra": "mean: 3.8923314504540327 msec\nrounds: 111"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 756.4796862627318,
            "unit": "iter/sec",
            "range": "stddev: 0.00012583391434535355",
            "extra": "mean: 1.321912561777226 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1571.6521489883685,
            "unit": "iter/sec",
            "range": "stddev: 0.00007872935155874042",
            "extra": "mean: 636.2731095705076 usec\nrounds: 648"
          }
        ]
      }
    ]
  }
}